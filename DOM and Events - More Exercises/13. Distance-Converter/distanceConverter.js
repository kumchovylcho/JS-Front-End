function attachEventsListeners() {
    const convertBtn = document.querySelector("#convert")
    const result = document.querySelector("#outputDistance")
    const fromOption = document.querySelector("#inputUnits")
    const toOption = document.querySelector("#outputUnits")
    const inputValue = document.querySelector("#inputDistance")

    convertBtn.addEventListener("click", handleConversion)


    function calculate(from, to, value) {
        const toMeters = {
            "km": 1000,
            "m": 1,
            "cm": 0.01,
            "mm": 0.001,
            "mi": 1609.34,
            "yrd": 0.9144,
            "ft": 0.3048,
            "in": 0.0254
        }

        return toMeters[from] * value / toMeters[to]
    }


    function handleConversion() {
        result.value = calculate(fromOption.value,
                                toOption.value,
                                Number(inputValue.value
                                ))

    }
}