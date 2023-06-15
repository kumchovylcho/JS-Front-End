function checkSpeedLimit(speed, area) {
    function speedingStatus(speedOver) {
        let speedStatus = {
            20: "speeding",
            40: "excessive speeding",
        }

        for (let [key, value] of Object.entries(speedStatus)) {
            if (speedOver <= key) {
                return value
            }
        }
        return "reckless driving"
    }


    let speedLimits = {"motorway": 130,
                       "interstate": 90,
                       "city": 50,
                       "residential": 20,
                       }

    let allowedSpeed = speedLimits[area]

    if (speed <= allowedSpeed) {
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
    }

    else {
        let diff = speed - allowedSpeed
        let status = speedingStatus(diff)
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`)
    }

}
