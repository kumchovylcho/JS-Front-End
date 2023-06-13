function mathOperations(x, y, operator) {
    let operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "%": (a, b) => a % b,
        "**": (a, b) => a ** b,
    }

    console.log(`${operations[operator](x, y)}`)

}


// function mathOperations(x, y, operator) {
//     if (operator === "+"){
//         console.log(`${x + y}`)
//     }
//
//     else if (operator === "-") {
//         console.log(`${x - y}`)
//     }
//
//     else if (operator === "*") {
//         console.log(`${x * y}`)
//     }
//
//     else if (operator === "/") {
//         console.log(`${x / y}`)
//     }
//
//     else if (operator === "%") {
//         console.log(`${x % y}`)
//     }
//
//     else if (operator === "**") {
//         console.log(`${x ** y}`)
//     }
//
// }