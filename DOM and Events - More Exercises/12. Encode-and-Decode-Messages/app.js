function encodeAndDecodeMessages() {
    const [encodeArea, decodeArea] = document.querySelectorAll("textarea")
    const [encodeBtn, decodeBtn] = document.querySelectorAll("button")

    encodeBtn.addEventListener("click", encodeMsg)
    decodeBtn.addEventListener("click", decodeMsg)


    function handleEncoding(message, encode = true) {
        let step = 1

        if (!encode) {
            step = -1
        }

        const result = []
        for (let i = 0; i < message.length; i++) {
            let newSymbol = message[i].charCodeAt(0) + step
            result.push(String.fromCharCode(newSymbol))
        }

        return result.join("")
    }


    function encodeMsg() {
        let message = encodeArea.value
        encodeArea.value = ""

        decodeArea.value = handleEncoding(message)
    }


    function decodeMsg() {
        decodeArea.value = handleEncoding(decodeArea.value, false)

    }

}