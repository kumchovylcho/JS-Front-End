function findSpecialWords(message) {
    message = message.split(" ")

    function checkIfAlpha(specialWord) {
        return /^[a-zA-Z]+$/.test(specialWord)
    }


    let output = []
    for (let word of message) {
        if (word[0] !== "#") {
            continue
        }

        let specialWord = word.slice(1, )
        if (checkIfAlpha(specialWord)) {
            output.push(specialWord)
        }

    }

    console.log(output.join("\n"))
}
