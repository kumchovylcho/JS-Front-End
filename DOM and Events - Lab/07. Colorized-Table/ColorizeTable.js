function colorize() {
    const table = document.getElementsByTagName("table")[0]

    for (let i = 0; i < table.rows.length; i++) {
        if (i % 2 === 0) {
            continue
        }

        table.rows[i].style.backgroundColor = "Teal"
    }

}