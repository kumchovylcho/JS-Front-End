function revealWords(words, template) {
    words = words.split(", ")
    template = template.split(" ")

    for (let word of words) {
        for (let i = 0; i < template.length; i++) {
            if (template[i].includes("*") && word.length === template[i].length) {
                template[i] = word
                break
            }
        }
    }

    console.log(template.join(" "))
}
