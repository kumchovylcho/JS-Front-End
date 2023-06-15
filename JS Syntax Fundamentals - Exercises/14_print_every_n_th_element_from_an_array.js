function printNthElement(array, step) {
    let new_array = []
    for (let i = 0; i < array.length; i += step) {
        new_array.push(array[i])
    }

    return new_array
}
