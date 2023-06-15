function findString(word, text) {
    text = text.toLowerCase().split(" ")

    if (text.includes(word)) {
        console.log(word)
    }

    else {
        console.log(`${word} not found!`)
    }
}
