function extract(content) {
    const text = document.getElementById(content).textContent

    const pattern = /\([\w ]+\)/g
    const result = text.match(pattern)

    return result.join("; ")

}