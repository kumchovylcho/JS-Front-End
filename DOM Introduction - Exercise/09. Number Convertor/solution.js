function solve() {
    const convertTo = document.querySelector("#selectMenuTo")
    const number = document.querySelector("#input")
    const result = document.querySelector("#result")
    const button = document.querySelector("#container > button")

    button.addEventListener("click", showResult)

    const options = {"Binary": "binary", "Hexadecimal": "hexadecimal"}

    function addOptions(options) {
        for (const [text, value] of Object.entries(options)) {
            const option = document.createElement("option")
            option.text = text
            option.value = value

            convertTo.appendChild(option)
        }
    }

    addOptions(options)

    function showResult() {
        if (convertTo.value === "binary") {
            result.value = parseFloat(number.value).toString(2)
        }

        else if (convertTo.value === "hexadecimal") {
            result.value = parseFloat(number.value).toString(16).toUpperCase()
        }

    }

}