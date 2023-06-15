function PascalSplitter(message) {
    let output = []
    let currentWord = []

    for (let i = 0; i < message.length; i++) {
        if (message[i] === message[i].toUpperCase() && currentWord.length) {
            output.push(currentWord.join(""))
            currentWord = []
        }

        currentWord.push(message[i])
    }

    output.push(currentWord.join(""))

    console.log(output.join(", "))
}
