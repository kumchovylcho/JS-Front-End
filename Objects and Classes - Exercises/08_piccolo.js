function piccolo(list) {
    let parking = []
    for (let info of list) {
        let [command, plateNumber] = info.split(", ")

        if (command === "IN" && !parking.includes(plateNumber)) {
            parking.push(plateNumber)
        }

        else if (command === "OUT" && parking.includes(plateNumber)) {
            let index = parking.indexOf(plateNumber)
            parking.splice(index, 1)
        }
    }

    if (parking.length) {
        console.log(parking.sort().join("\n"))
    }

    else {
        console.log("Parking Lot is Empty")
    }
}
