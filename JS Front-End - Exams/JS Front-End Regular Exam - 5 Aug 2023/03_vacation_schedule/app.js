function solve() {

    const createElement = (tag, content="", klasses=[], id="", listener="") => {
        const element = document.createElement(tag);

        if (content) {
            element.textContent = content;
        };

        if (klasses.length) {
            element.classList.add(...klasses);
        };

        if (id) {
            element.id = id;
        };

        if (listener) {
            element.addEventListener("click", listener);
        };

        return element;
    };

    const btnHandler = (e) => {
        handlers = {
            "Load Vacations": loadVacations,
            "Change": changeVacation,
            "Done": doneVacation,
            "Add Vacation": addVacation,
            "Edit Vacation": editVacation,
        };

        handlers[e.target.textContent](e);
    };


    const loadVacations = (e) => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                listUl.innerHTML = "";

                Object.values(data).forEach(item => {
                    const div = createElement("div", "", ["container"], item._id);

                    div.appendChild(createElement("h2", item.name));
                    div.appendChild(createElement("h3", item.date));
                    div.appendChild(createElement("h3", item.days));
                    div.appendChild(createElement("button", "Change", ["change-btn"], "", btnHandler));
                    div.appendChild(createElement("button", "Done", ["done-btn"], "", btnHandler));

                    listUl.appendChild(div);
                })
            })
            .catch();
    };


    const changeVacation = (e) => {
        const div = e.target.parentElement;
        editId = div.id;
        div.remove();

        const name = div.querySelector("h2");
        const [date, days] = div.querySelectorAll("h3");

        fields.name.value = name.textContent;
        fields.date.value = date.textContent;
        fields.days.value = days.textContent;

        editVacationBtn.disabled = false;
        addVacationBtn.disabled = true;
    };


    const doneVacation = (e) => {
        editId = e.target.parentElement.id;

        fetch(`${baseUrl}${editId}`, {
            method: "DELETE",
        })
            .then(() => loadVacations())
            .catch()
    };


    const addVacation = (e) => {
        e.preventDefault();

        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(objectFromFields())
        })
            .then(() => loadVacations(e))
            .then(() => clearInputFields())
            .catch();
    };


    const editVacation = (e) => {
        editVacationBtn.disabled = true;
        addVacationBtn.disabled = false;

        fetch(`${baseUrl}${editId}`, {
            method: "PUT",
            body: JSON.stringify(objectFromFields())
        })
            .then(() => loadVacations())
            .then(() => clearInputFields())
            .catch()
    };


    const objectFromFields = () => {
        const newVacation = {};
        for (const [key, value] of Object.entries(fields)) {
            newVacation[key] = value.value;
        }

        return newVacation;
    };


    const clearInputFields = () => {
        Object.values(fields).forEach(field => field.value = "");
    };


    const baseUrl = "http://localhost:3030/jsonstore/tasks/";
    const listUl = document.querySelector("#list");

    const fields = {
        name: document.querySelector("#name"),
        days: document.querySelector("#num-days"),
        date: document.querySelector("#from-date"),
    };

    const loadBtn = document.querySelector("#load-vacations");
    loadBtn.addEventListener("click", btnHandler);

    const addVacationBtn = document.querySelector("#add-vacation");
    addVacationBtn.addEventListener("click", btnHandler);

    const editVacationBtn = document.querySelector("#edit-vacation");
    editVacationBtn.addEventListener("click", btnHandler);

    let editId = "";
};

solve();