function armies(array) {
    function addCount(armyName, count) {
        for (const leader in army) {
            for (const armies of army[leader].armys) {
                if (armyName === armies.name) {
                    armies.count += count
                    army[leader].totalCount += count
                    break
                }
            }
        }
    }

    let army = {}

    for (let info of array) {
        if (info.includes("arrives")) {
            const leader = info.split(" arrives")[0]

            if (!army.hasOwnProperty(leader)) {
                army[leader] = {}
                army[leader].totalCount = 0
                army[leader].armys = []
            }
        }

        else if (info.includes(":")) {
            info = info.split(", ")
            const armyCount = parseInt(info[1])
            const [leader, armyName] = info[0].split(": ")

            if (army.hasOwnProperty(leader)) {
                army[leader].armys.push({name: armyName, count: armyCount})
                army[leader].totalCount += armyCount
            }
        }

        else if (info.includes("+")) {
            const [armyName, armyCount] = info.split(" + ")

            addCount(armyName, parseInt(armyCount))

        }

        else if(info.includes("defeated")) {
            const leader = info.split(" defeated")[0]

            if (army.hasOwnProperty(leader)) {
                delete army[leader]
            }
        }
    }

    for (const [leader, info] of Object.entries(army).sort(([, a], [, b]) => b.totalCount - a.totalCount)) {
        console.log(`${leader}: ${info.totalCount}`)

        for (const {name, count} of info.armys.sort((a, b) => b.count - a.count)) {
            console.log(`>>> ${name} - ${count}`)
        }
    }
}

