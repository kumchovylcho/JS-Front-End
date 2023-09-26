function focused() {
    function focusHandler(item) {
        item.target.parentElement.className = "focused"
    }

    function blurHandler(item) {
        const currentBox = item.target
        const parentDiv = currentBox.parentElement

        if (parentDiv.classList.contains("focused")) {
            parentDiv.classList.remove("focused")
        }
    }

    const inputBoxes = document.getElementsByTagName("input")

    for (const input of inputBoxes) {
        input.addEventListener("focus", focusHandler)
        input.addEventListener("blur", blurHandler)
    }
}