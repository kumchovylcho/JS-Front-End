function attachEvents() {
    const forecast = document.querySelector("#forecast")
    const location = document.querySelector("#location")
    const getWeatherBtn = document.querySelector("#submit")
    const currentData = document.querySelector("#current")
    const upcoming = document.querySelector("#upcoming")
    getWeatherBtn.addEventListener("click", getWeather)

    const locationsUrl = "http://localhost:3030/jsonstore/forecaster/locations"
    const conditionsUrl = "http://localhost:3030/jsonstore/forecaster/today/"
    const nextThreeDays = "http://localhost:3030/jsonstore/forecaster/upcoming/"

    const weatherConditions = {
        "Sunny": '&#x2600',
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
        "Degrees": "&#176",
    }


    function findLocationCode(info) {
        for (const item of info) {
            if (location.value === item.name) {
                return item.code
            }
        }
        return false
    }



    function getWeather() {
        fetch(locationsUrl).then(response => response.json()).then(data => {
            let code = findLocationCode(data)

            if (!code) {
                forecast.textContent = "Error"
            }

            else{
                fetch(`${conditionsUrl}${code}`).then(response => response.json()).then(data => {
                    forecast.style.display = "block"

                    currentData.innerHTML = `
                        <div class="forecasts">
                            <span class="condition symbol">${weatherConditions[data.forecast.condition]}</span>
                            <span class="condition">
                                <span class="forecast-data">${data.name}</span>
                                <span class="forecast-data">${data.forecast.low}${weatherConditions["Degrees"]}/${data.forecast.high}${weatherConditions["Degrees"]}</span>
                                <span class="forecast-data">${data.forecast.condition}</span>
                            </span>
                        </div>
                    `

                }).catch()

                fetch(`${nextThreeDays}${code}`).then(response => response.json()).then(data => {
                    const upcomingDiv = document.createElement("div")
                    upcomingDiv.classList.add("forecast-info")

                    for (const info of data.forecast) {
                        upcomingDiv.innerHTML += `
                           <span class="upcoming">
                                <span class="symbol">${weatherConditions[info.condition]}</span>
                                <span class="forecast-data">${info.low}${weatherConditions["Degrees"]}/${info.high}${weatherConditions["Degrees"]}</span>
                                <span class="forecast-data">${info.condition}</span>
                            </span>
                        `
                    }
                    upcoming.appendChild(upcomingDiv)


                }).catch()


            }


        })
            .catch(error => {
                forecast.textContent = "Error"
            })
    }

}

attachEvents();