function search() {
    const input = document.querySelector("#searchText").value
    const result = document.querySelector("#result")
    const towns = Array.from(document.querySelector("#towns").children)

    if (result.textContent) {
        result.textContent = ""
    }

    let matches = 0
    for (let i = 0; i < towns.length; i++) {
        let town = towns[i]
        town.style.textDecoration = ""
        town.style.fontWeight = ""

        if (town.textContent.includes(input)) {
            town.style.textDecoration = "underline"
            town.style.fontWeight = "bold"
            matches += 1
        }
    }

    result.textContent = `${matches} matches found`

}
