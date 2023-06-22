function flightSchedule(list) {
    let output = []
    let allFlights = list.shift()
    let changedStatuses = list.shift()
    let checkStatus = list.shift()[0]

    for (let flight of allFlights) {
        let [number, destination] = flight.split(" ")

        const flightInfo = {
            Destination: destination,
            number: number,
            Status: 'Ready to fly'
        }
        output.push(flightInfo)
    }

    for (let chFlight of changedStatuses) {
        let [chNumber, status] = chFlight.split(" ")

        for (let data of output) {
            if (data.number === chNumber && status !== data.Status) {
                data.Status = status
                break
            }
        }
    }

    for (let data of output) {
        delete data.number
        if (checkStatus === "Ready to fly") {
            if (data.Status === checkStatus) {
                console.log(data)
            }
            continue
        }

        if (data.Status !== "Ready to fly") {
            console.log(data)
        }
    }
}
