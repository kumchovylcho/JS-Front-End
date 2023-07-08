function attachEvents() {
    const updateBookUrl = "http://localhost:3030/jsonstore/collections/books/"
    const loadBooks = document.querySelector("#loadBooks")
    const submitFormBtn = document.querySelector("#form > button")
    const tbody = document.querySelector("table > tbody")
    const formHeading = document.querySelector("#form > h3")

    const [title, author] = document.querySelectorAll("input[type=text]")

    loadBooks.addEventListener("click", loadAllBooks)
    submitFormBtn.addEventListener("click", createBook)

    const allBookIds = {}
    let editBookId = null

    function createElementWithTextContent(element, textContent) {
        const item = document.createElement(element)
        item.textContent = textContent
        return item
    }

    async function loadAllBooks() {
        tbody.innerHTML = ""

        const response = await fetch(updateBookUrl);
        const data = await response.json();

        for (const [key, value] of Object.entries(data)) {
            allBookIds[key] = value
            allBookIds[key]._id = key
        }

        for (const [key, book] of Object.entries(data)) {
            const newRow = document.createElement("tr")
            newRow.appendChild(createElementWithTextContent("td", book.title))
            newRow.appendChild(createElementWithTextContent("td", book.author))

            const tdWithButtons = createElementWithTextContent("td", "")
            const editBtn = createElementWithTextContent("button", "Edit")
            const deleteBtn = createElementWithTextContent("button", "Delete")

            editBtn.addEventListener("click", () => {
                editBookId = key
                formHeading.textContent = "Edit FORM"
                submitFormBtn.textContent = "Save"
                title.value = book.title
                author.value = book.author
            })

            deleteBtn.addEventListener("click", deleteBook)

            tdWithButtons.appendChild(editBtn)
            tdWithButtons.appendChild(deleteBtn)

            newRow.appendChild(tdWithButtons)
            tbody.appendChild(newRow)
        }

    }


    async function createBook() {
        const titleInput = title.value;
        const authorInput = author.value;

        if (!titleInput || !authorInput) {
            return;
        }

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: titleInput,
                author: authorInput
            })
        };

        let url = updateBookUrl;

        if (formHeading.textContent === 'Edit FORM') {
            httpHeaders.method = 'PUT';
            url += editBookId;
        }

        const response = await fetch(url, httpHeaders);
        await loadAllBooks();

        if (formHeading.textContent === 'Edit FORM') {
            submitFormBtn.textContent = 'Submit';
            formHeading.textContent = 'FORM';
        }
        title.value = '';
        author.value = '';

    }

    async function deleteBook() {
        const id = this.id
        const httpHeaders = {
            method: 'DELETE'
        }

        await fetch(updateBookUrl + id, httpHeaders)
        await loadAllBooks()
    }


}

attachEvents();
