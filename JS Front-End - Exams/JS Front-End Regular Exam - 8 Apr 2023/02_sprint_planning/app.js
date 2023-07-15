window.addEventListener('load', solve);

function solve() {
    const createBtn = document.querySelector("#create-task-btn");
    const deleteBtn = document.querySelector("#delete-task-btn");

    const titleField = document.querySelector("#title");
    const descriptionField = document.querySelector("#description");
    const labelField = document.querySelector("#label");
    const pointsField = document.querySelector("#points");
    const assigneeField = document.querySelector("#assignee");

    const allFields = [titleField, descriptionField, labelField, pointsField, assigneeField];
    const allTasks = document.querySelector("#tasks-section");
    const totalPoints = document.querySelector("#total-sprint-points");

    createBtn.addEventListener("click", createTask);
    deleteBtn.addEventListener("click", deleteTask);

    let articleId = 0;
    let deleteArticleId = ""

    const priorityIcons = {
        'Feature': {
            class: "feature",
            textContent: 'Feature &#8865;'
        },
        'Low Priority Bug': {
            class: "low-priority",
            textContent: 'Low Priority Bug &#9737;'
        },
        'High Priority Bug': {
            class: "high-priority",
            textContent: 'High Priority Bug &#9888;'
        },
    };

    function resetFields() {
        allFields.forEach(field => field.value = "")
    }

    function lockUnlockFields(lock=true) {
        allFields.forEach(field => field.disabled = lock);
    }

    function createElement(type,
                           textContent="",
                           klass=[],
                           id="",
                           value="",
                           listener="") {
        const element = document.createElement(type);

        if (textContent) {
            element.textContent = textContent;
        }

        if (klass.length > 0) {
            for (const klassName of klass) {
                element.classList.add(klassName.toLowerCase());
            }
        }

        if (id) {
            element.id = id;
        }

        if (value) {
            element.value = value;
        }

        if (listener) {
            element.addEventListener("click", listener);
        }

        return element;
    }

    function handlePoints(operation, value) {
        const points = parseInt(totalPoints.textContent.split("Total Points ")[1].split("pts")[0]);
        let result = 0;

        if (operation === "remove") {
            result = points - value
        }

        else if (operation === "add") {
            result = points + value;
        }

        totalPoints.textContent = `Total Points ${result}pts`;
    }

    function createTask() {
        if (allFields.some(field => !field.value)) {
            return;
        }

        articleId += 1
        handlePoints("add", parseInt(pointsField.value));

        const article = createElement("article", "", ["task-card"], `task-${articleId}`);
        const iconDiv = createElement("div", "", ['task-card-label', priorityIcons[labelField.value].class]);
        iconDiv.innerHTML = priorityIcons[labelField.value].textContent;
        article.appendChild(iconDiv);

        article.appendChild(createElement("h3", `${titleField.value}`, ['task-card-title']));
        article.appendChild(createElement("p", `${descriptionField.value}`, ['task-card-description']));
        article.appendChild(createElement("div", `Estimated at ${pointsField.value} pts`, ['task-card-points']));
        article.appendChild(createElement("div", `Assigned to: ${assigneeField.value}`, ['task-card-assignee']));

        const divBtn = createElement("div", "", ["task-card-actions"]);
        divBtn.appendChild(createElement("button", "Delete", [], "", "", deleteTaskHelper));
        article.appendChild(divBtn);
        allTasks.appendChild(article);

        resetFields();
    }

    function deleteTask() {
        const article = document.querySelector(`#${deleteArticleId}`)
        allTasks.removeChild(article);

        handlePoints("remove", parseInt(pointsField.value));
        createBtn.disabled = false;
        deleteBtn.disabled = true;
        lockUnlockFields(false);
        resetFields();
    }

    function deleteTaskHelper(event) {
        createBtn.disabled = true;
        deleteBtn.disabled = false;
        lockUnlockFields(true)

        const article = event.target.parentElement.parentElement

        deleteArticleId = article.id
        const title = article.querySelector(".task-card-title").textContent;
        const description = article.querySelector(".task-card-description").textContent;
        const points = article.querySelector(".task-card-points").textContent.match(/[0-9]+/)[0];
        const assignee = article.querySelector(".task-card-assignee").textContent.split("Assigned to: ")[1];
        const label = article.querySelector(".task-card-label").textContent.match(/[a-zA-Z ]+/g)[0].trim();

        titleField.value = title
        descriptionField.value = description
        pointsField.value = points
        assigneeField.value = assignee
        labelField.value = label
    }
}