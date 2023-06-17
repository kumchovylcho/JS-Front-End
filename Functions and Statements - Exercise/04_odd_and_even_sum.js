function oddEvenSum(number) {
    number = number.toString()

    function oddOrEvenSum(strNumber, modulosRemainder = 0) {
        let result = 0
        for (let i = 0; i < strNumber.length; i++) {
            let curr_number = parseInt(strNumber[i])

            if (curr_number % 2 === modulosRemainder) {
                result += curr_number
            }
        }

        return result
    }

    let oddSum = oddOrEvenSum(number, 1)
    let evenSum = oddOrEvenSum(number, 0)

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
