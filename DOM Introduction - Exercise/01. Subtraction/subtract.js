function subtract() {
    const numOne = document.getElementById("firstNumber")
    const numTwo = document.getElementById("secondNumber")

    const result = parseFloat(numOne.value) - parseFloat(numTwo.value)
    document.getElementById("result").textContent += result
}