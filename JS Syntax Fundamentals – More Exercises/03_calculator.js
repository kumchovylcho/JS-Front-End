function calculator(firstNum, operator, secondNum) {
    let operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
    }

    console.log(operations[operator](firstNum, secondNum).toFixed(2))
}