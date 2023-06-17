function validityChecker(points) {
    function calcDistance(x1 ,y1 ,x2, y2) {
        return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    }

    function validDistance(distance, x1, y1, x2, y2) {
        if (Number.isInteger(distance)) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        }

        return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
    }

    let [x1, y1, x2, y2] = [...points]

    let distance1 = calcDistance(x1, y1, 0, 0)
    let distance2 = calcDistance(x2, y2, 0, 0)
    let distance3 = calcDistance(x1, y1, x2, y2)

    console.log(validDistance(distance1, x1, y1, 0, 0))
    console.log(validDistance(distance2, x2, y2, 0, 0))
    console.log(validDistance(distance3, x1, y1, x2, y2))
}
