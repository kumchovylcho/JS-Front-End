function carWash(commands) {
    let operations = {
        "soap": (a) => a + 10,
        "water": (a) => a * 1.20,
        "vacuum cleaner": (a) => a * 1.25,
        "mud": (a) => a * 0.9,
    }

    let clean = 0
    for (let command of commands) {
        clean = operations[command](clean)
    }

    console.log(`The car is ${clean.toFixed(2)}% clean.`)
}
