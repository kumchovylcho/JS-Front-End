function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/tasks/";

    const titleField = document.querySelector("#title");
    const descriptionField = document.querySelector("#description");

    const loadBtn = document.querySelector("#load-board-btn");
    const addTaskBtn = document.querySelector("#create-task-btn");

    loadBtn.addEventListener("click", loadBoard);
    addTaskBtn.addEventListener("click", addTask);

    const articles = {
        "ToDo":
            {
                article: document.querySelector("#todo-section > .task-list"),
                buttonName: "Move to In Progress",
            },
        "In Progress":
            {
                article: document.querySelector("#in-progress-section > .task-list"),
                buttonName: "Move to Code Review",
            },
        "Code Review":
            {
                article: document.querySelector("#code-review-section > .task-list"),
                buttonName: "Move to Done",
            },
        "Done":
            {
                article: document.querySelector("#done-section > .task-list"),
                buttonName: "Close"
            },
    };

    const moveArticle = {
        "todo-section": {status: "In Progress"},
        "in-progress-section": {status: "Code Review"},
        "code-review-section": {status: "Done"},
    };

    function createElement(type,
                           textContent="",
                           klass="",
                           id="",) {
        const element = document.createElement(type);

        if (textContent) {
            element.textContent = textContent;
        }

        if (klass) {
            element.classList.add(klass);
        }

        if (id) {
            element.id = id;
        }

        return element;
    }

    function loadBoard() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                Object.values(articles).forEach(article => article.article.innerHTML = "")

                Object.values(data).forEach(task => {
                    const newLi = createElement("li", "", "task", task._id);

                    newLi.appendChild(createElement("h3", task.title, ""));
                    newLi.appendChild(createElement("p", task.description));

                    const btn = createElement("button", articles[task.status].buttonName);

                    let listener = moveTask;
                    if (btn.textContent === "Close") {
                        listener = closeTask;
                    }

                    btn.addEventListener("click", listener);
                    newLi.appendChild(btn);

                    articles[task.status].article.appendChild(newLi);
                })
            }).catch();
    }

    function addTask() {
        const newTask = {
            title: titleField.value,
            description: descriptionField.value,
            status: "ToDo",
        };

        titleField.value = "";
        descriptionField.value = "";

        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(newTask),
        })
            .then(() => loadBoard())
            .catch();
    }

    function moveTask(event) {
        const li = event.target.parentElement;
        const liId = li.id
        const articleId = li.closest("article").id;

        const newTaskStatus = {
            status: moveArticle[articleId].status
        };

        fetch(`${baseUrl}${liId}`, {
            method: 'PATCH',
            body: JSON.stringify(newTaskStatus),
        })
            .then(() => loadBoard())
            .catch();
    }

    function closeTask(event) {
        const liId = event.target.parentElement.id;

        fetch(`${baseUrl}${liId}`, {
            method: "DELETE",
        })
            .then(() => loadBoard())
            .catch();
    }
}

attachEvents();