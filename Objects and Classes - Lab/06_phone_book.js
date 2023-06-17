function phoneBook(book) {
    let output = {}

    for (let data of book) {
        let [name, number] = data.split(" ")
        output[name] = number
    }

    for (const [name, number] of Object.entries(output)) {
        console.log(`${name} -> ${number}`)
    }
}
