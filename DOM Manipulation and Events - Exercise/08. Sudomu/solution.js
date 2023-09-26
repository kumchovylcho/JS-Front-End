function solve() {
    const [checkBtn, clearBtn] = document.querySelectorAll("button")
    const [...inputs] = document.querySelectorAll("input")
    const result = document.querySelector("#check > p")
    const table = document.querySelector("table")

    clearBtn.addEventListener("click", clearFields)
    checkBtn.addEventListener("click", validateTable)

    function validateRows(table) {
        for (let i = 0; i < table.length; i+=3) {
            let uniqueRow = new Set()

            for (let j = i; j < i + 3; j++) {
                uniqueRow.add(table[j])
            }

            if (uniqueRow.size !== 3) {
                return false
            }
        }

        return true
    }


    function validateColumns(table) {
        for (let i = 0; i < 3; i++) {
            let uniqueColumn = new Set()

            for (let j = i; j < table.length; j+=3) {
                uniqueColumn.add(table[j])
            }

            if (uniqueColumn.size !== 3) {
                return false
            }
        }

        return true
    }


    function validateTable() {
        const numbers = inputs.map(input => input.value)

        if (validateRows(numbers) && validateColumns(numbers)) {
            table.style.border = "2px solid green"
            result.textContent = "You solve it! Congratulations!"
            result.style.color = "green"
        }

        else {
            table.style.border = "2px solid red"
            result.textContent = "NOP! You are not done yet..."
            result.style.color = "red"
        }
    }


    function clearFields() {
        inputs.forEach(input => {
            input.value = ""
        })

        result.textContent = ""
        result.style.color = ""
        table.style.border = ""

    }
}