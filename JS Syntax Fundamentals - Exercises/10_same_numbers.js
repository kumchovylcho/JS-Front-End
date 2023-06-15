function sameNumbers(numbers) {
    let strNumbers = numbers.toString()

    function SumNumbers(strNumber) {
        let total = 0
        for (let i = 0; i < strNumber.length; i++) {
            total += parseInt(strNumber[i])
        }

        return total
    }

    function isSame(strNumber) {
        let previous = strNumber[0]
        for (let i = 1; i < strNumber.length; i++) {
            if (strNumber[i] !== previous) {
                return false
            }
        }

        return true
    }

    console.log(isSame(strNumbers))
    console.log(SumNumbers(strNumbers))

}
