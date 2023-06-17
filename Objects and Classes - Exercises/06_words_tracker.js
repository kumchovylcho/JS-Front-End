function wordsTracker(words) {
    let occurrences = {}

    const lookFor = words.shift().split(" ")

    for (let word of lookFor) {
        occurrences[word] = 0
    }
    for (let lookWord of lookFor) {
        for (let word of words) {
            if (word === lookWord) {
                occurrences[lookWord] += 1
            }
        }
    }

    for (const [word, count] of Object.entries(occurrences).sort((a, b) => b[1] - a[1])) {
        console.log(`${word} - ${count}`)
    }
}
