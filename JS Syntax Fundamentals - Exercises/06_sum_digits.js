function sumDigits(digits) {
    let total = 0
    let stringDigits = digits.toString()
    for (let i = 0; i < stringDigits.length; i++) {
        total += parseInt(stringDigits[i])
    }

    console.log(total)
}
