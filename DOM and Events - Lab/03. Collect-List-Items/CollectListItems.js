function extractText() {
    const items = document.getElementsByTagName("li")

    let output = []

    for (let i = 0; i < items.length; i++) {
        output.push(items[i].textContent)
    }

    document.getElementById("result").textContent = output.join("\n")
}
