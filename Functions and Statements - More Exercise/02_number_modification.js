function numberModification(number) {
    function averageNumber(number) {
        let result = 0
        for (let i = 0; i < number.length; i++) {
            result += parseInt(number[i])
        }

        return result / number.length
    }

    let output = number.toString()
    while (averageNumber(output) < 5) {
        output += "9"
    }

    console.log(output)
}
