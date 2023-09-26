function attachEventsListeners() {
    const daysBtn = document.querySelector("#daysBtn")
    const hoursBtn = document.querySelector("#hoursBtn")
    const minutesBtn = document.querySelector("#minutesBtn")
    const secondsBtn = document.querySelector("#secondsBtn")

    let days = document.querySelector("#days")
    let hours = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")

    daysBtn.addEventListener("click", getDays)
    hoursBtn.addEventListener("click", getHours)
    minutesBtn.addEventListener("click", getMinutes)
    secondsBtn.addEventListener("click", getSeconds)

    function calculate(operation, value) {
        const operations = {
            "daysToHours": (a) => a * 24,
            "daysToMinutes": (a) => (a * 24) * 60,
            "daysToSeconds": (a) => (a * 24) * 60 ** 2,

            "hoursToDays": (a) => a / 24,
            "hoursToMinutes": (a) => a * 60,
            "hoursToSeconds": (a) => a * 60 ** 2,

            "minutesToDays": (a) => (a / 60) / 24,
            "minutesToHours": (a) => (a / 60),
            "minutesToSeconds": (a) => a * 60,

            "secondsToDays": (a) => ((a / 60) / 60) / 24,
            "secondsToHours": (a) => (a / 60) / 60,
            "secondsToMinutes": (a) => a / 60
        }

        return operations[operation](value)
    }

    function setValues(field, value) {
        field.value = value
    }


    function getDays() {
        days = Number(days.value)

        setValues(hours, calculate("daysToHours", days))
        setValues(minutes, calculate("daysToMinutes", days))
        setValues(seconds, calculate("daysToSeconds", days))
    }


    function getHours() {
        hours = Number(hours.value)

        setValues(days, calculate("hoursToDays", hours))
        setValues(minutes, calculate("hoursToMinutes", hours))
        setValues(seconds, calculate("hoursToSeconds", hours))
    }


    function getMinutes() {
        minutes = Number(minutes.value)

        setValues(days, calculate("minutesToDays", minutes))
        setValues(hours, calculate("minutesToHours", minutes))
        setValues(seconds, calculate("minutesToSeconds", minutes))
    }


    function getSeconds() {
        seconds = Number(seconds.value)

        setValues(days, calculate("secondsToDays", seconds))
        setValues(hours, calculate("secondsToHours", seconds))
        setValues(minutes, calculate("secondsToMinutes", seconds))
    }


}