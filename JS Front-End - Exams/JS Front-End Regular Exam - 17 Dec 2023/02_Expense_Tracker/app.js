window.addEventListener("load", solve);

function solve() {

    const createElement = (tag, textContent="", klasses=[], listener="") => {
        const element = document.createElement(tag);

        if (textContent) {
            element.textContent = textContent;
        };

        if (klasses.length) {
            element.classList.add(...klasses);
        };
        
        if (listener) {
            element.addEventListener("click", listener);
        };

        return element;
    };
    
    const invalidFields = () => {
        return Object.values(inputs).some(x => x.value === "");
    }

    const resetInputFields = () => {
        Object.values(inputs).forEach(field => field.value = "");
    }

    const buttonHandler = (e) => {
        handlers = {
            "Add": addExpense,
            "edit": editExpense,
            "ok": transferExpense,
            "Delete": () => window.location.reload()
        };

        handlers[e.target.textContent](e);
    }

    const addExpense = (e) => {
        if (invalidFields()) {
            return;
        }

        const li = createElement("li", "", ["expense-item"]);
        const article = createElement("article");
        article.appendChild(createElement("p", `Type: ${inputs.expense.value}`));
        article.appendChild(createElement("p", `Amount: ${inputs.amount.value}$`));
        article.appendChild(createElement("p", `Date: ${inputs.date.value}`));
        li.appendChild(article);

        const buttonsDiv = createElement("div", "", ["buttons"]);
        buttonsDiv.appendChild(createElement("button", "edit", ["btn", "edit"], buttonHandler));
        buttonsDiv.appendChild(createElement("button", "ok", ["btn", "ok"], buttonHandler));
        li.appendChild(buttonsDiv);

        sections.preview.appendChild(li);

        resetInputFields();
        addBtn.disabled = true;
    }

    const editExpense = (e) => {
        const li = e.target.parentElement.parentElement;
        li.remove();

        const [expense, amount, date] = li.querySelectorAll("article p");
        
        inputs.expense.value = expense.textContent.split(": ")[1];
        inputs.amount.value = amount.textContent.split(": ")[1].replace("$", "");
        inputs.date.value = date.textContent.split(": ")[1];
        
        addBtn.disabled = false;
    }

    const transferExpense = (e) => {
        const li = e.target.parentElement.parentElement;
        li.remove();
        li.querySelector("div").remove();

        sections.expenses.appendChild(li);

        addBtn.disabled = false;
    }


    const inputs = {
        expense: document.querySelector("#expense"),
        amount: document.querySelector("#amount"),
        date: document.querySelector("#date"),
    };

    const sections = {
        preview: document.querySelector("#preview-list"),
        expenses: document.querySelector("#expenses-list"),
    };

    const addBtn = document.querySelector("#add-btn");
    addBtn.addEventListener("click", buttonHandler);

    const deleteExpensesBtn = document.querySelector("#expenses button");
    deleteExpensesBtn.addEventListener("click", buttonHandler);
}