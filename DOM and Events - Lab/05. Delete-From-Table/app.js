function deleteByEmail() {
    const deleteEmail = document.getElementsByName("email")[0].value

    const table = document.getElementById("customers")
    let resultText = "Not found."

    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i]
        if (row.cells[1].textContent === deleteEmail) {
            table.deleteRow(i)
            resultText = "Deleted"
            break
        }
    }

    document.getElementById("result").textContent = resultText
    document.getElementsByName("email")[0].value = ""

}