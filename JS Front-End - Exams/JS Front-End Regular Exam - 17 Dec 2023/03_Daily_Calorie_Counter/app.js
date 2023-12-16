function attachEvents() {

    const createElement = (tag, textContent="", klasses=[], id="", listener="") => {
        const element = document.createElement(tag);

        if (textContent) {
            element.textContent = textContent;
        };

        if (klasses.length) {
            element.classList.add(...klasses);
        };

        if (id) {
            element.id = id;
        }
        
        if (listener) {
            element.addEventListener("click", listener);
        };

        return element;
    };

    const resetFields = () => {
        Object.values(inputs).forEach(field => field.value = "");
    }

    const loadMeals = async (e) => {
        divList.innerHTML = "";

        const response = await fetch(baseUrl);
        const data = await response.json();
        
        Object.values(data).forEach(item => {
            const mealDiv = createElement("div", "", ["meal"], item._id);
            mealDiv.appendChild(createElement("h2", item.food));
            mealDiv.appendChild(createElement("h3", item.time));
            mealDiv.appendChild(createElement("h3", item.calories));

            const buttonsDiv = createElement("div", "", [], "meal-buttons");
            buttonsDiv.appendChild(createElement("button", "Change", ["change-meal"], "", changeMeal));
            buttonsDiv.appendChild(createElement("button", "Delete", ["delete-meal"], "", deleteMeal));
            mealDiv.appendChild(buttonsDiv);

            divList.appendChild(mealDiv);
        });

        editMealBtn.disabled = true;
    }

    const addMeal = async (e) => {
        const createdItem = {
            food: inputs.food.value,
            time: inputs.time.value,
            calories: inputs.calories.value,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createdItem)
        };

        await fetch(baseUrl, options);
        resetFields();
        await loadMeals(e);
        
    }

    const changeMeal = (e) => {
        const mealDiv = e.target.parentElement.parentElement;
        editId = mealDiv.id;
        mealDiv.remove();

        inputs.food.value = mealDiv.querySelector("h2").textContent;
        const [time, calories] = mealDiv.querySelectorAll("h3");
        inputs.time.value = time.textContent;
        inputs.calories.value = calories.textContent;

        addBtn.disabled = true;
        editMealBtn.disabled = false;
    }

    const editMeal = async (e) => {
        modifiedItem = {
            food: inputs.food.value,
            time: inputs.time.value,
            calories: inputs.calories.value,
        };

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(modifiedItem)
        };

        await fetch(`${baseUrl}${editId}`, options);
        editId = "";
        editMealBtn.disabled = true;
        addBtn.disabled = false;
        await loadMeals(e);
    }

    const deleteMeal = async (e) => {
        const deleteItemId = e.target.parentElement.parentElement.id;

        options = {
            method: "DELETE",
        };

        await fetch(`${baseUrl}${deleteItemId}`, options);
        await loadMeals(e);
    }

    const baseUrl = "http://localhost:3030/jsonstore/tasks/";

    const loadMealsBtn = document.querySelector("#load-meals");
    loadMealsBtn.addEventListener("click", loadMeals);

    const editMealBtn = document.querySelector("#edit-meal");
    editMealBtn.addEventListener("click", editMeal);

    const addBtn = document.querySelector("#add-meal");
    addBtn.addEventListener("click", addMeal);

    const divList = document.querySelector("#list");

    const inputs = {
        food: document.querySelector("#food"),
        time: document.querySelector("#time"),
        calories: document.querySelector("#calories"),
    };

    let editId = "";
}


attachEvents();