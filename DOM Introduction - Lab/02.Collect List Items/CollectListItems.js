function extractText() {
    const liItems = Array.from(document.querySelector("#items").children);
    let result = document.querySelector("#result");

    let textResult = "";
    for (const item of liItems) {
        textResult += item.textContent + "\n";
    }

    result.textContent = textResult;
}