function meetings(meetings) {
    let output = {}

    for (let data of meetings) {
        let [day, name] = data.split(" ")

        if (output.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
            continue
        }

        output[day] = name
        console.log(`Scheduled for ${day}`)
    }

    for (const [day, name] of Object.entries(output)) {
        console.log(`${day} -> ${name}`)
    }
}
