function addItem() {
    const menu = document.getElementById("menu")

    const newText = document.getElementById("newItemText")
    const newValue = document.getElementById("newItemValue")

    const newOption = document.createElement("option")
    newOption.textContent = newText.value
    newOption.value = newValue.value

    menu.appendChild(newOption)

    newText.value = ""
    newValue.value = ""
}