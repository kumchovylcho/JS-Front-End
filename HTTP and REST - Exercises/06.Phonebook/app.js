function attachEvents() {
    const loadBtn = document.querySelector("#btnLoad")
    const createBtn = document.querySelector("#btnCreate")
    const [person, phoneNumber] = document.querySelectorAll("input")

    const getAndPostUrl = "http://localhost:3030/jsonstore/phonebook"
    const deleteUrl = "http://localhost:3030/jsonstore/phonebook/"

    loadBtn.addEventListener("click", getPhoneBooks)
    createBtn.addEventListener("click", createPhoneBook)

    function getPhoneBooks() {
        fetch(getAndPostUrl).then(response => response.json()).then(data => {
            const ul = document.querySelector("#phonebook")
            console.log(data)

            for (const info of Object.values(data)) {
                const li = document.createElement("li")
                li.textContent = `${info.person}: ${info.phone}`

                const deleteBtn = document.createElement("button")
                deleteBtn.textContent = "Delete"

                deleteBtn.addEventListener("click", () => deletePhoneEntry(info._id, li))

                li.appendChild(deleteBtn)
                ul.appendChild(li)
            }

        }).catch()
    }

    function createPhoneBook() {
        const data = {
            person: person.value,
            phone: phoneNumber.value
        }

        fetch(getAndPostUrl, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            person.value = ""
            phoneNumber.value = ""
            getPhoneBooks()
        })
    }


    function deletePhoneEntry(id, li) {
        fetch(`${deleteUrl}${id}`, {
            method: "DELETE",
        })
            .then(() => li.remove())
            .catch()
    }


}
attachEvents();