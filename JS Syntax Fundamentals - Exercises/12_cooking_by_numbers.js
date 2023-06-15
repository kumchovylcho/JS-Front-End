function cookNumbers(number, ...commands) {
    let cookingNumber = parseInt(number)

    let operations = {
        "chop": (a) => a / 2,
        "dice": (a) => Math.sqrt(a),
        "spice": (a) => a + 1,
        "bake": (a) => a * 3,
        "fillet": (a) => a * 0.8,
    }

    for (let command of commands) {
        cookingNumber = operations[command](cookingNumber)
        console.log(cookingNumber)
    }
}
