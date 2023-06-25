function addItem() {
    const newItem = document.getElementById("newItemText").value

    if (newItem.length) {
        let createdItem = document.createElement("li")
        createdItem.textContent = newItem

        document.getElementById("items").appendChild(createdItem)
    }

    document.getElementById("newItemText").value = ""
}