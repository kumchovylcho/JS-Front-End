function printAndSum(start, end) {
    let total = 0

    for (let i = start; i <= end; i++) {
        process.stdout.write(String(i) + ' ')
        total += i
    }

    console.log(`\nSum: ${total}`)
}
