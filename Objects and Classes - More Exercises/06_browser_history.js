function browserHistory(object, array) {
    function checkIfTabOpened(website) {
        return !!object['Open Tabs'].includes(website);

    }

    for (let operation of array) {
        let [command, ...website] = operation.split(" ")
        website = website.join(" ")

        if (command === "Open") {
            object['Open Tabs'].push(website)
            object['Browser Logs'].push(`${command} ${website}`)
        }

        else if (command === "Close" && checkIfTabOpened(website)) {
            const index = object['Open Tabs'].indexOf(website)
            object['Open Tabs'].splice(index, 1)
            object['Recently Closed'].push(website)
            object['Browser Logs'].push(`${command} ${website}`)
        }

        else if (command.includes("Clear")) {
            object['Open Tabs'] = []
            object['Recently Closed'] = []
            object['Browser Logs'] = []
        }
    }

    console.log(object['Browser Name'])
    console.log(`Open Tabs: ${object['Open Tabs'].join(", ")}`)
    console.log(`Recently Closed: ${object['Recently Closed'].join(", ")}`)
    console.log(`Browser Logs: ${object['Browser Logs'].join(", ")}`)
}
