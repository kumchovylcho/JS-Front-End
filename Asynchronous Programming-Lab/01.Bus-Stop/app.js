function getInfo() {
    const stopId = document.querySelector("#stopId")
    const url = "http://localhost:3030/jsonstore/bus/businfo/"
    const stopName = document.querySelector("#stopName")
    const bussesInfo = document.querySelector("#buses")


    fetch(`${url}${stopId.value}`)
        .then(response => response.json())
        .then(data => {
            setData(data)
        })

        .catch(() => {
            stopName.textContent = "Error"
        })


    function setData(info) {
        stopName.textContent = info.name

        for (const [id, time] of Object.entries(info.buses)) {
            const li = document.createElement("li")
            li.textContent = `Bus ${id} arrives in ${time} minutes`

            bussesInfo.appendChild(li)
        }
    }

}