function attachGradientEvents() {
    const gradient = document.getElementById("gradient")
    const result = document.getElementById("result")

    gradient.addEventListener("mouseout", () => {
        result.textContent = ""
    })

    gradient.addEventListener("mousemove", (event) => {
        const mouseX = event.offsetX
        const divWidth = gradient.clientWidth

        result.textContent = `${Math.floor((mouseX / divWidth) * 100)}%`
    })

}