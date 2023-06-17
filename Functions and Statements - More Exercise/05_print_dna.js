function printDNA(lines) {
    let stars = 2
    let dashes = 0

    let sequence = "ATCGTTAGGG"
    let start = 0
    let end = 0
    let isRaising = false

    for (let i = 1; i <= lines; i++) {
        if (stars === 2) {
            isRaising = false
            dashes = 0
        }
        else if (stars === 1) {
            dashes = 2
        }

        else if (stars === 0) {
            isRaising = true
            dashes = 4
        }

        if (end >= sequence.length) {
            start = 0
            end = 0
        }

        start += 2
        end += 2
        let currentLetters = sequence.slice(start - 2, end)
        let line = `${"*".repeat(stars)}${currentLetters[0]}${"-".repeat(dashes)}${currentLetters[1]}${"*".repeat(stars)}`
        console.log(line)

        if (!isRaising) {
            stars -= 1
        }

        else {
            stars += 1
        }
    }
}