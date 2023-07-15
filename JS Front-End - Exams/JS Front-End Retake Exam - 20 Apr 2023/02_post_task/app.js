window.addEventListener("load", solve);

function solve() {

    function createElement(type,
                           textContent="",
                           klass=[],
                           listener="") {
        const element = document.createElement(type);

        if (textContent) {
            element.textContent = textContent;
        }

        if (klass.length > 0) {
            klass.forEach(klass => element.classList.add(klass));
        }

        if (listener) {
            element.addEventListener("click", listener);
        }

        return element;
    }

    function addTask() {
        if (!titleField.value || !categoryField.value || !contentField.value) {
            return;
        }

        const li = createElement("li", "", ["rpost"]);

        const article = createElement("article");
        article.appendChild(createElement("h4", titleField.value));
        article.appendChild(createElement("p", `Category: ${categoryField.value}`));
        article.appendChild(createElement("p", `Content: ${contentField.value}`));

        li.appendChild(article);
        li.appendChild(createElement("button", "Edit", ["action-btn", "edit"], editTask));
        li.appendChild(createElement("button", "Post", ["action-btn", "post"], postTask));

        reviewList.appendChild(li);

        titleField.value = "";
        categoryField.value = "";
        contentField.value = ""
    }

    function editTask(event) {
        const task = event.target.parentElement;

        const title = task.querySelector("h4");
        let [category, content] = task.querySelectorAll("p");
        category = category.textContent.split("Category: ")[1];
        content = content.textContent.split("Content: ")[1];

        titleField.value = title.textContent;
        categoryField.value = category;
        contentField.value = content;

        reviewList.removeChild(task);

    }

    function postTask(event) {
        const task = event.target.parentElement;

        task.removeChild(task.lastChild);
        task.removeChild(task.lastChild);
        reviewList.removeChild(task);

        publishedList.appendChild(task);
    }

    const [titleField, categoryField] = document.querySelectorAll("input");
    const contentField = document.querySelector("#task-content");
    const reviewList = document.querySelector("#review-list");
    const publishedList = document.querySelector("#published-list");

    const publishBtn = document.querySelector("#publish-btn");
    publishBtn.addEventListener("click", addTask);
}