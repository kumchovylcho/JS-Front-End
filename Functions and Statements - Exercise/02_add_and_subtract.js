function solve(numOne, numTwo, numThree) {
    function sumNumbers(numOne, numTwo) {
        return [numOne, numTwo].reduce((acc, current) => acc + current, 0)
    }

    function subtract(sumResults, numThree) {
        return sumResults - numThree
    }

    let sumResult = sumNumbers(numOne, numTwo)
    let finalResult = subtract(sumResult, numThree)

    console.log(finalResult)
}
