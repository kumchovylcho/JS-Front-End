function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/tasks/";

    const title = document.querySelector("#title")
    const addBtn = document.querySelector("#add-button");
    const loadBtn = document.querySelector("#load-button");
    const allTasksUl = document.querySelector("#todo-list");

    loadBtn.addEventListener("click", loadTasks);
    addBtn.addEventListener("click", addTasks);

    function createElement(type, textContent = "", value = "", id="", listener="") {
        const element = document.createElement(type);

        if (textContent) {
            element.textContent = textContent;
        }

        if (value) {
            element.value = value;
        }

        if (id) {
            element.id = id;
        }

        if (listener) {
            element.addEventListener("click", listener)
        }

        return element;
    }

    async function loadTasks(event) {
        allTasksUl.innerHTML = "";
        title.value = "";

        event.preventDefault();
        const response = await fetch(baseUrl);
        const data = await response.json();
        const tasks = Object.values(data);

        for (const data of tasks) {
            const li = createElement("li", "", "", data._id);

            li.appendChild(createElement("span", data.name, "", ""));
            li.appendChild(createElement("button", "Remove", "", "", removeTask));
            li.appendChild(createElement("button", "Edit", "", "", editTask));

            allTasksUl.appendChild(li);
        }
    }

    async function addTasks(event) {
        event.preventDefault();

        const task = {
            name: title.value,
        }

        await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(task)
        });

        await loadTasks(event);
    }

    async function removeTask(event) {
        const id = event.target.parentElement.id;

        await fetch(`${baseUrl}${id}`, {
            method: "DELETE",
        });

        await loadTasks(event);
    }

    async function editTask(event) {
        const li = event.target.parentElement;
        const id = li.id;

        if (event.target.textContent === "Edit") {
            const span = li.querySelector("span")
            const input = createElement("input", "", span.textContent, "", "");

            li.replaceChild(input, span);
            event.target.textContent = "Submit"
        }

        else if (event.target.textContent === "Submit") {
            const newItem = {
                name: li.querySelector("input").value,
            }

            await fetch(`${baseUrl}${id}`, {
                method: 'PATCH',
                body: JSON.stringify(newItem)
            });

            await loadTasks(event)
        }
    }
}

attachEvents();
