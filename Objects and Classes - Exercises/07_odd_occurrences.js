function oddOccurrences(string) {
    let output = []

    string = string.toLowerCase().split(" ")
    for (let word of string) {
        let counter = 0
        for (let searchWord of string) {
            if (word === searchWord) {
                counter += 1
            }
        }

        if (counter % 2 === 1 && !output.includes(word)) {
            output.push(word.toLowerCase())
        }
    }

    console.log(output.join(" "))
}