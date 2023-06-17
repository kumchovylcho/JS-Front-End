function palindromeIntegers(numbers) {
    function reverseNumber(number) {
        number = number.toString()
        let output = []
        for (let i = numbers.length - 1; i >= 0; i--) {
            output.push(number[i])
        }

        return parseInt(output.join(""))
    }

    for (let number of numbers) {
        if (number === reverseNumber(number)) {
            console.log(true)
            continue
        }

        console.log(false)
    }
}
