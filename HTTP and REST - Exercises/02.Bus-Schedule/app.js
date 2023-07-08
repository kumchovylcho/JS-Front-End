function solve() {
    const departBtn = document.querySelector("#depart")
    const arriveBtn = document.querySelector("#arrive")
    const infoBox = document.querySelector(".info")
    const url = "http://localhost:3030/jsonstore/bus/schedule/"
    let firstStopId = "depot"
    let nextStop = ""

    function setBtnDisableStates(arrive=true, depart=false) {
        arriveBtn.disabled = arrive
        departBtn.disabled = depart
    }

    function depart() {
        fetch(`${url}${firstStopId}`)
            .then(response => response.json())
            .then(data => {
                nextStop = data.name

                infoBox.textContent = `Next stop ${nextStop}`
                firstStopId = data.next
                setBtnDisableStates(false, true)
            })
            .catch((error) => {
                infoBox.textContent = "Error"
            })
    }


    async function arrive() {
        setBtnDisableStates()
        infoBox.textContent = `Arriving at ${nextStop}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
