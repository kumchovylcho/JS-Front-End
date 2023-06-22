function sequences(arrays) {
    function sumNumbers(array) {

        let result = 0
        for (let x of array) {
            result += x
        }

        return result
    }

    arrays = arrays.map(el => JSON.parse(el))
    arrays.forEach(el => el.sort((a, b) => b - a))

    let output = []

    for (let i = 0; i < arrays.length; i++) {
        let currentList = arrays[i]

        let isUnique = true
        for (let j = 0; j < output.length; j++) {
            if (sumNumbers(output[j]) === sumNumbers(currentList)) {
                isUnique = false
                break
            }
        }

        if (isUnique) {
            output.push(currentList)
        }
    }

    output.sort((a, b) => a.length - b.length)
    for (let arr of output) {
        console.log(`[${arr.join(", ")}]`)
    }
}
