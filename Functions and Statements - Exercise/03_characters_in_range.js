function solve(start, end) {
    start = start.charCodeAt(0)
    end = end.charCodeAt(0)

    let initial = 0
    let last = 0

    if (start > end) {
        initial = end
        last = start
    }

    else {
        initial = start
        last = end
    }

    
    let output = []
    for (let value = initial + 1; value < last; value++) {
        output.push(String.fromCharCode(value))
    }

    console.log(output.join(" "))
}
