function circleArea(value) {
    if (typeof value === 'number') {
        console.log(`${(value ** 2 * Math.PI).toFixed(2)}`)
    }

    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof value}.`)
    }
}
