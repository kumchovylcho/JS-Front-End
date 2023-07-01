function editElement(element, string, replacer) {
    element.textContent = element.textContent.replace(new RegExp(string, 'g'), replacer)

}