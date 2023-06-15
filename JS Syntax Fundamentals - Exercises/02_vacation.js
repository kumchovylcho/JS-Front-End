function vacation(people, group, day) {
    let vacation = {
        "Students": {"Friday": 8.45,
                    "Saturday": 9.80,
                    "Sunday": 10.46,
                    },
        "Business": {"Friday": 10.9,
                    "Saturday": 15.6,
                    "Sunday": 16,
                    },
        "Regular": {"Friday": 15,
                    "Saturday": 20,
                    "Sunday": 22.5,
                    },
    }

    let hasToPay = vacation[group][day] * people

    if (group === "Students" && people >= 30) {
        hasToPay *= 0.85
    }

    else if (group === "Business" && people >= 100) {
        hasToPay -= vacation[group][day] * 10
    }

    else if (group === "Regular" && people >= 10 && people <= 20) {
        hasToPay *= 0.95
    }

    console.log(`Total price: ${hasToPay.toFixed(2)}`)
}