function addItem() {
    function deleteItem(item) {
        item.target.parentElement.remove()
    }

    const allItems = document.getElementById("items")

    const addItem = document.getElementById("newItemText")

    if (!addItem.value.length) {
        addItem.value = ""
        return
    }

    const createLi = document.createElement("li")
    const anchor = document.createElement("a")

    anchor.textContent = "[Delete]"
    anchor.setAttribute("href", "#")
    anchor.addEventListener("click", deleteItem)

    createLi.textContent = addItem.value
    createLi.appendChild(anchor)
    allItems.appendChild(createLi)

    addItem.value = ""

}