function sortNumbers(numbers) {
    numbers.sort((a, b) => a - b)

    let output = []
    while (numbers.length) {
        output.push(numbers.shift())
        output.push(numbers.pop())
    }

    return output
}
