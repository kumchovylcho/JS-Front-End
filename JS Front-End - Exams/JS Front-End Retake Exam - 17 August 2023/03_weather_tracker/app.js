function solve() {

    const createElement = (tag, content="", klasses=[], id="", listener="") => {
        const element = document.createElement(tag);

        if (content) {
            element.textContent = content;
        }

        if (klasses.length) {
            element.classList.add(...klasses);
        }

        if (id) {
            element.id = id;
        }

        if (listener) {
            element.addEventListener("click", listener);
        }

        return element;
    }

    const btnHandler = (e) => {
        const operations = {
            "Load History": loadHistory,
            "Change": changeWeather,
            "Delete": deleteWeather,
            "Add Weather": addWeather,
            "Edit Weather": editWeather,
        }

        operations[e.target.textContent](e)
    }

    const changeWeather = (e) => {
        const mainDiv = e.target.parentElement.parentElement;
        editId = mainDiv.id;
        
        const location = mainDiv.querySelector("h2").textContent;
        const [date, temperature] = mainDiv.querySelectorAll("h3");

        fields.location.value = location;
        fields.date.value = date.textContent;
        fields.temperature.value = temperature.textContent;

        editWeatherBtn.disabled = false;
        addWeatherBtn.disabled = true;

        mainDiv.remove();
    }

    const deleteWeather = (e) => {
        editId = e.target.parentElement.parentElement.id;
        console.log(editId);

        fetch(`${baseUrl}${editId}`, {
            method: "DELETE",
        })
            .then(() => loadHistory())
            .catch()
    }

    const addWeather = (e) => {
        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(createNewWeather()),
        })
            .then(() => {
                loadHistory();
                resetInputFields();
            })
            .catch()
    }

    const editWeather = (e) => {
        fetch(`${baseUrl}${editId}`, {
            method: "PUT",
            body: JSON.stringify(createNewWeather())
        })
            .then(() => {
                loadHistory();
                editWeatherBtn.disabled = true;
                addWeatherBtn.disabled = false;
            })
            .catch()
    }

    const loadHistory = (e) => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                listContainer.innerHTML = "";

                Object.values(data).forEach(item => {
                    const containerDiv = createElement("div", "", ["container"], id=item._id);
                    containerDiv.appendChild(createElement("h2", item.location));
                    containerDiv.appendChild(createElement("h3", item.date));
                    containerDiv.appendChild(createElement("h3", item.temperature, [], "celsius"));

                    const btnsContainer = createElement("div", "", ["buttons-container"]);
                    btnsContainer.appendChild(createElement("button", "Change", ["change-btn"], "", btnHandler));
                    btnsContainer.appendChild(createElement("button", "Delete", ["delete-btn"], "", btnHandler));

                    containerDiv.appendChild(btnsContainer);

                    listContainer.appendChild(containerDiv);
                })
            })
    }

    const resetInputFields = () => {
        Object.values(fields).forEach(field => field.value = "");
    }

    const createNewWeather = () => {
        const newWeather = {};
        for (const [key, value] of Object.entries(fields)) {
            newWeather[key] = value.value;
        }

        return newWeather;

    }

    const baseUrl = "http://localhost:3030/jsonstore/tasks/";

    let editId = "";

    const fields = {
        location: document.querySelector("#location"),
        temperature: document.querySelector("#temperature"),
        date: document.querySelector("#date"),
    }

    const loadBtn = document.querySelector("#load-history");
    loadBtn.addEventListener("click", btnHandler);

    const addWeatherBtn = document.querySelector("#add-weather");
    addWeatherBtn.addEventListener("click", btnHandler);

    const editWeatherBtn = document.querySelector("#edit-weather");
    editWeatherBtn.addEventListener("click", btnHandler);

    const listContainer = document.querySelector("#list");
}


solve();