function factorialDivision(firstNum, secondNum) {

    function findFactorial(number) {
        if (number === 1) {
            return 1
        }

        return number * findFactorial(number - 1)
    }

    let result = (findFactorial(firstNum) / findFactorial(secondNum)).toFixed(2)
    console.log(result)
}
