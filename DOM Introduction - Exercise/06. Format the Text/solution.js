function solve() {
  const mainDiv = document.getElementById("output")

  const getText = document.getElementById("input")

  const sentences = getText.value.split(".")

  let everyThree = []


  for (let sentence of sentences) {
      if (sentence.length > 0) {
          everyThree.push(sentence)
      }

      if (everyThree.length === 3) {
          const paragraph = document.createElement("p")
          paragraph.textContent = everyThree.join(".").trim() + "."

          mainDiv.appendChild(paragraph)
          everyThree = []
      }
  }

  if (everyThree.length > 0) {
      const paragraph = document.createElement("p")
      paragraph.textContent = everyThree.join(".").trim() + "."

      mainDiv.appendChild(paragraph)
  }

}