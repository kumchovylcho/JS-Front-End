function drawMatrix(number) {
    for (let i = 0; i < number; i++) {
        let currentLine = []

        for (let j = 0; j < number; j++) {
            currentLine.push(number)
        }

        console.log(currentLine.join(" "))
    }
}
