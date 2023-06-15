function arrayRotation(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        numbers.push(numbers.shift())
    }

    console.log(numbers.join(" "))
}
