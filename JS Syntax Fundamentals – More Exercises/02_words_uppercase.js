function wordsUppercase(string) {
    let words = string.match(/\w+/g)

    let output = words.map(word => word.toUpperCase())

    console.log(output.join(", "))
}
