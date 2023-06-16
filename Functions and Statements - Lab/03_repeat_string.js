function repeatString(string, repeatCount) {
    let output = []
    for (let _ = 0; _ < repeatCount; _++) {
        output.push(string)
    }

    return output.join("")
}