function solve(base, increment) {
    let stonesNeeded = 0
    let marbleNeeded = 0
    let lapisNeeded = 0
    let goldNeeded = 0

    let steps = Math.ceil(base / 2)
    let level = 0
    let floor = base
    for (let step = 1; step < steps; step++) {
        level++

        stonesNeeded += ((floor - 2) ** 2)

        if (level % 5 !== 0) {
            marbleNeeded += (floor * 4) - 4
        }

        else {
            lapisNeeded += (floor * 4) - 4
        }

        floor -= 2
    }

    if (base % 2 === 0) {
        goldNeeded = 4
    }

    else {
        goldNeeded = 1
    }

    console.log(`Stone required: ${Math.ceil(stonesNeeded * increment)}`)
    console.log(`Marble required: ${Math.ceil(marbleNeeded * increment)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisNeeded * increment)}`)
    console.log(`Gold required: ${Math.ceil(goldNeeded * increment)}`)
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`)

}