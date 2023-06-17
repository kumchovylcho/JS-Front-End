function loadingBar(percentageFill) {
    let percentageSymbols = percentageFill / 10
    let dotsSymbols = 10 - percentageSymbols

    function makeBar(percentageSymbols, dotSymbols) {
        const perc_symbol = "%"
        const dots = "."

        return `[${perc_symbol.repeat(percentageSymbols)}${dots.repeat(dotSymbols)}]`
    }

    let bar = makeBar(percentageSymbols, dotsSymbols)
    if (percentageSymbols < 10) {
        console.log(`${percentageFill}% ${bar}`)
        console.log("Still loading...")
    }

    else {
        console.log(`${percentageFill}% Complete!`)
        console.log(bar)
    }
}