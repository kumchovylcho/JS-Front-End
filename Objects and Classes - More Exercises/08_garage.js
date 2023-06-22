function garage(list) {
    let garage = {}
    for (let info of list) {
        let number = info.split(" - ")[0]

        if (!garage.hasOwnProperty(number)) {
            garage[number] = {}
            garage[number].cars = []
        }

        let data = {}
        for (let carData of info.split(" - ")[1].split(", ")) {
            let [key, value] = carData.split(": ")
            data[key] = value
        }
        garage[number].cars.push(data)

    }

    for (let key in garage) {
        console.log(`Garage № ${key}`)

        let cars = garage[key].cars

        for (const car of cars) {
            const printParts = []
            for (const property in car) {
                printParts.push(`${property} - ${car[property]}`)
            }

            console.log(`--- ${printParts.join(", ")}`)
        }
    }
}
