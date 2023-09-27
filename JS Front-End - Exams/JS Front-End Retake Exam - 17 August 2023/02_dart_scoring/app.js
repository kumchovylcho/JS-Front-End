window.addEventListener("load", solve);

function solve() {

    const createElement = (tag, content="", klasses=[], listener="") => {
        const element = document.createElement(tag);

        if (content) {
            element.textContent = content;
        }

        if (klasses.length) {
            element.classList.add(...klasses);
        }

        if (listener) {
            element.addEventListener("click", listener);
        }

        return element;
    }

    const hasEmptyField = () => {
        return Object.values(fields).some(field => !field.value);
    }

    const resetFields = () => {
        Object.values(fields).forEach(field => field.value = "");
    }

    const btnHandler = (e) => {
        operations = {
            "Add": addScore,
            "edit": editInformation,
            "ok": addToBoard,
            "Clear": (e) => location.reload(),
        }

        operations[e.target.textContent.split(" ")[0]](e);
    }

    const editInformation = (e) => {
        addBtn.disabled = false;

        const li = e.target.parentElement;
        li.remove();

        const article = li.querySelector("article");
        const [name, score, round] = article.querySelectorAll("p");

        fields.name.value = name.textContent;
        fields.score.value = score.textContent.split("Score: ")[1];
        fields.round.value = round.textContent.split("Round: ")[1];
    }

    const addToBoard = (e) => {
        const li = e.target.parentElement;
        li.remove();

        Array.from(li.querySelectorAll("button")).forEach(btn => btn.remove());
        addBtn.disabled = false;

        scoreBoardUl.appendChild(li);
    }

    const addScore = (e) => {
        if (hasEmptyField()) {
            return;
        }

        const li = createElement("li", "", ["dart-item"]);
        const article = createElement("article");

        article.appendChild(createElement("p", fields.name.value));
        article.appendChild(createElement("p", `Score: ${fields.score.value}`));
        article.appendChild(createElement("p", `Round: ${fields.round.value}`));

        li.appendChild(article);
        li.appendChild(createElement("button", "edit", ["btn", "edit"], btnHandler));
        li.appendChild(createElement("button", "ok", ["btn", "ok"], btnHandler));

        sureListUl.appendChild(li);
        addBtn.disabled = true;
        resetFields();
    }
    
    const fields = {
        name: document.querySelector("#player"),
        score: document.querySelector("#score"),
        round: document.querySelector("#round"),
    };

    const addBtn = document.querySelector("#add-btn");
    addBtn.addEventListener("click", btnHandler);

    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", btnHandler);

    const sureListUl = document.querySelector("#sure-list");
    const scoreBoardUl = document.querySelector("#scoreboard-list");

}