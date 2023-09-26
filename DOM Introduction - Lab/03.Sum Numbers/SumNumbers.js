function calc() {
    const firstNum = document.querySelector("#num1").value;
    const secondNum = document.querySelector("#num2").value;
    const result = document.querySelector("#sum");

    result.value = Number(firstNum) + Number(secondNum);
}
