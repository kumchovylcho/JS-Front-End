function sumTable() {
    const table = document.getElementsByTagName("table")[0].rows

    let total = 0
    for (let i = 1; i < table.length - 1; i++) {
        total += parseFloat(table[i].cells[1].textContent)
    }

    document.getElementById("sum").textContent = total
}