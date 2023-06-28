function create(words) {
    const mainDiv = document.getElementById("content")

    for (let word of words) {
        let div = document.createElement("div")
        let paragraph = document.createElement("p")
        paragraph.textContent = word
        paragraph.style.display = "none"

        div.appendChild(paragraph)
        mainDiv.appendChild(div)

        div.addEventListener("click", () => {
            paragraph.style.display = ""
        })
    }
}
