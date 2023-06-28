function solve() {
    const [generateText, BuyText] = Array.from(document.getElementsByTagName("textarea"))
    const [generateBtn, BuyBtn] = Array.from(document.getElementsByTagName("button"))

    const table = document.querySelector("table > tbody")

    generateBtn.addEventListener("click", generateHelper)
    BuyBtn.addEventListener("click", buyHelper)

    function generateHelper() {

        function createImg(image) {
            const tdRow = document.createElement("td")
            const img = document.createElement("img")
            img.src = image

            tdRow.appendChild(img)
            return tdRow
        }

        function createP(data) {
            const tdRow = document.createElement("td")
            const info = document.createElement("p")
            info.textContent = data

            tdRow.appendChild(info)
            return tdRow

        }


        const dataEntered = JSON.parse(generateText.value)

        for (let i = 0; i < dataEntered.length; i++) {
            const newRow = document.createElement("tr")
            newRow.appendChild(createImg(dataEntered[i]["img"]))
            newRow.appendChild(createP(dataEntered[i]["name"]))
            newRow.appendChild(createP(dataEntered[i]["price"]))
            newRow.appendChild(createP(dataEntered[i]["decFactor"]))

            let checkBoxTd = document.createElement("td")
            let checkBox = document.createElement('input')
            checkBox.setAttribute("type", "checkbox")

            checkBoxTd.appendChild(checkBox)
            newRow.appendChild(checkBoxTd)
            table.appendChild(newRow)
        }

    }

    function buyHelper() {
        const allRows = table.getElementsByTagName("tr")

        let names = []
        let totalPrice = 0
        let avgDecFactor = 0

        for (let i = 0; i < allRows.length; i++) {
            const row = allRows[i]

            if (row.children[4].children[0].checked) {
                const itemName = row.children[1].textContent.trim()
                const price = parseFloat(row.children[2].textContent)
                const decFactor = parseFloat(row.children[3].textContent)

                names.push(itemName)
                totalPrice += price
                avgDecFactor += decFactor

            }
        }

        if (names.length > 0) {
            BuyText.value = `Bought furniture: ${names.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor / names.length}`
        }

    }
}

