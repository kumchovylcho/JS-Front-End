function attachEvents() {
  const url = "http://localhost:3030/jsonstore/collections/students"
  const submitBtn = document.querySelector("#submit")
  const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll("input")
  const tbody = document.querySelector("table > tbody")

  submitBtn.addEventListener("click", addStudent)

  function addStudent() {
      if ([firstName, lastName, facultyNumber, grade].some(element => element.value.length === 0)) {
          return
      }

      const studentData = {
          firstName: firstName.value,
          lastName: lastName.value,
          facultyNumber: facultyNumber.value,
          grade: grade.value,
      }

      fetch(url, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(studentData)
      })
  }

  fetch(url).then(response => response.json()).then(data => {
      Object.values(data).forEach(student => {
          const newRow = document.createElement("tr")
          newRow.appendChild(createElementWithTextContent("td", student.firstName))
          newRow.appendChild(createElementWithTextContent("td", student.lastName))
          newRow.appendChild(createElementWithTextContent("td", student.facultyNumber))
          newRow.appendChild(createElementWithTextContent("td", student.grade))

          tbody.appendChild(newRow)
      })
  })

  function createElementWithTextContent(element, text) {
      const item = document.createElement(element)
      item.textContent = text
      return item
  }
}

attachEvents();