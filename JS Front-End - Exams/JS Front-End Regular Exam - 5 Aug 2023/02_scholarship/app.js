window.addEventListener("load", solve);

function solve() {

    const createElement = (tag, content="", klasses=[], listener="") => {
        const element = document.createElement(tag);

        if (content) {
            element.textContent = content;
        };

        if (klasses.length) {
            element.classList.add(...klasses);
        };
        
        if (listener) {
            element.addEventListener("click", listener);
        };

        return element;
    };

    const hasEmptyField = () => {
        return Object.values(fields).some(field => field.value === "");
    };

    const resetFields = () => {
        Object.values(fields).forEach(field => field.value = "");
    };

    const btnHandler = (e) => {
        const btnManager = {
            "Next": previewList,
            "edit": editPreview,
            "apply": applyPreview,
        };

        btnManager[e.target.textContent](e);
    };

    const editPreview = (e) => {
        const li = e.target.parentElement;
        const article = li.querySelector('article');
        const name = article.querySelector("h4").textContent;
        let [university, score] = article.querySelectorAll("p");
        university = university.textContent.split("University: ")[1];
        score = score.textContent.split("Score: ")[1];

        fields.studentName.value = name;
        fields.university.value = university;
        fields.score.value = score;

        nextBtn.disabled = false;
        li.remove();
    };

    const applyPreview = (e) => {
        const li = e.target.parentElement;
        Array.from(li.querySelectorAll("button")).forEach(btn => btn.remove());
        li.remove();

        scholarship.appendChild(li);
        nextBtn.disabled = false;
    };

    const previewList = (e) => {
        if (hasEmptyField()) {
            return;
        };

        const li = createElement("li", "", ["application"]);    
        const article = createElement("article");

        article.appendChild(createElement("h4", fields.studentName.value));
        article.appendChild(createElement("p", `University: ${fields.university.value}`));
        article.appendChild(createElement("p", `Score: ${fields.score.value}`));

        li.appendChild(article);
        li.appendChild(createElement("button", "edit", ["action-btn", "edit"], editPreview));
        li.appendChild(createElement("button", "apply", ["action-btn", "apply"], applyPreview));

        previewUl.appendChild(li);

        resetFields();
        nextBtn.disabled = true;
    };

    const fields = {
      studentName: document.querySelector("#student"),
      university: document.querySelector("#university"),
      score: document.querySelector("#score"),
    };

    const previewUl = document.querySelector("#preview-list");
    const scholarship = document.querySelector("#candidates-list");

    const nextBtn = document.querySelector("#next-btn");
    nextBtn.addEventListener("click", btnHandler);
  
}
  