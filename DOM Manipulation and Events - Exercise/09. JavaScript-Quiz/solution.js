function solve() {
  const sections = Array.from(document.querySelectorAll("section"))
  let correctAnswers = 0
  const allAnswers = 3
  const result = document.querySelector("#results")

  const [...inputs] = document.querySelectorAll("p")
  inputs.forEach(input => {
      input.addEventListener("click", handleAnswer)
  })

  function rightAnswer(question, answer) {
      const QA = {
          "Question #1: Which event occurs when the user clicks on an HTML element?": "onclick",
          "Question #2: Which function converting JSON to string?": "JSON.stringify()",
          "Question #3: What is DOM?": "A programming API for HTML and XML documents"
      }

      return QA[question] === answer
  }


  function handleAnswer(event) {
      let section = sections.shift()
      const question = section.querySelector(".question-wrap").textContent.trim()
      const answer = event.target.textContent

      if (rightAnswer(question, answer)) {
          correctAnswers += 1
      }

      section.style.display = "none"

      if (sections.length > 0) {
          sections[0].style.display = "block"
      }

      else if (sections.length === 0) {
          showResult();
      }

  }


  function showResult() {
      let resultText = "You are recognized as top JavaScript fan!"

      if (correctAnswers !== allAnswers) {
          resultText = `You have ${correctAnswers} right answers`
      }

      result.style.display = "block"
      const h1 = result.querySelector(".results-inner > h1")
      h1.textContent = resultText
  }

}
