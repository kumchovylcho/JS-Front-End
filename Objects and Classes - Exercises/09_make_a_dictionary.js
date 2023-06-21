function makeDictionary(list) {
    let dictionary = {}
    for (let item of list) {
        let json = JSON.parse(item)
        let key = Object.keys(json)[0]

        dictionary[key] = Object.values(json)[0]
    }

    for (let [key, value] of Object.entries(dictionary).sort()) {
        console.log(`Term: ${key} => Definition: ${value}`)
    }
}
