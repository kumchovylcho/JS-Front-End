function signCheck(numOne, numTwo, numThree) {
    function checkTwoNegatives(nums) {
        let negativeCounter = 0
        for (let num of nums) {
            if (num < 0) {
                negativeCounter++
            }
        }

        return negativeCounter === 2;
    }

    let numbers = [numOne, numTwo, numThree]

    if (numbers.every(x => x > 0) || checkTwoNegatives(numbers)) {
        console.log("Positive")
    }

    else if (numbers.some(x => x < 0) || (numbers.every(x => x < 0))) {
        console.log("Negative")
    }

}
