function radioCrystals(thickness) {
    let finalThickness = thickness[0]
    thickness = thickness.slice(1, thickness.length)

    function transportAndWash(crystalThickness) {
        return Math.floor(crystalThickness)
    }

    function canCut(thickness, goalThickness) {
        return thickness / 4 >= goalThickness - 1
    }

    function canLap(thickness, goalThickness) {
        return thickness * 0.8 >= goalThickness - 1
    }

    function canGrind(thickness, goalThickness) {
        return thickness - 20 >= goalThickness - 1
    }

    function canEtch(thickness, goalThickness) {
        return thickness - 2 >= goalThickness - 1
    }

    for (let crystal of thickness) {
        console.log(`Processing chunk ${crystal} microns`)

        let operations = {
            "Cut": 0,
            "Lap": 0,
            "Grind": 0,
            "Etch": 0,
            "X-ray": 0,
        }

        while (crystal !== finalThickness) {
            if (canCut(crystal, finalThickness)) {
                crystal /= 4
                operations['Cut']++
                crystal = transportAndWash(crystal)
            }

            else if (canLap(crystal, finalThickness)) {
                crystal *= 0.8
                operations['Lap']++
                crystal = transportAndWash(crystal)
            }

            else if (canGrind(crystal, finalThickness)) {
                crystal -= 20
                operations['Grind']++
                crystal = transportAndWash(crystal)
            }

            else if (canEtch(crystal, finalThickness)) {
                crystal -= 2
                operations['Etch']++
                crystal = transportAndWash(crystal)
            }

            else {
                crystal += 1
                operations['X-ray']++
            }

        }

        for (let [operation, counter] of Object.entries(operations)) {
            if (counter > 0) {
                console.log(`${operation} x${counter}`)

                if (operation !== "X-ray") {
                    console.log("Transporting and washing")
                }
            }
        }

        console.log(`Finished crystal ${finalThickness} microns`)
    }
}
