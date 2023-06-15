function ages(number) {
    let ages = {
        66: "elder",
        20: "adult",
        14: "teenager",
        3: "child",
        0: "baby",
    }

    let result = ""
    for (let [ key, value ] of Object.entries(ages)) {
        if (number >= key) {
            result = value
        }
    }

    if (result) {
        console.log(result)
    }

    else {
        console.log("out of bounds")
    }

}
