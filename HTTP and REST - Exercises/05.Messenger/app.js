function attachEvents() {
    const [author, content, submitBtn, refreshBtn] = document.querySelectorAll("input")
    const chatBox = document.querySelector("#messages")

    submitBtn.addEventListener("click", sendMsg)
    refreshBtn.addEventListener("click", getMessages)

    const requestUrl = "http://localhost:3030/jsonstore/messenger"


    function sendMsg() {
        const message = {
            author: author.value,
            content: content.value
        }

        fetch(requestUrl, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message)
        })
    }


    function getMessages() {
        fetch(requestUrl).then(response => response.json()).then(data => {
            const messages = []
            for (const content of Object.values(data)) {
                console.log(content)
                messages.push(`${content.author}: ${content.content}`)
            }

            chatBox.textContent = messages.join("\n")
        }).catch()
    }

}

attachEvents();