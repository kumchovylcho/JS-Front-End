function solution() {
    const getArticlesUrl = "http://localhost:3030/jsonstore/advanced/articles/list"
    const detailsUrl = "http://localhost:3030/jsonstore/advanced/articles/details/"
    const main = document.querySelector("#main")

    function loadArticles(data) {
        main.innerHTML = ""
        for (const info of Object.values(data)) {
            main.innerHTML += `
                <div class="accordion">
                    <div class="head">
                        <span>${info.title}</span>
                        <button class="button" id="${info._id}">More</button>
                    </div>
                    <div class="extra"></div>
                </div>
            `

        }
        const btns = document.querySelectorAll("button")
        const extras = document.querySelectorAll(".extra")

        btns.forEach(button => {
            button.addEventListener("click", showMore)
        })

        extras.forEach(extra => {
            extra.style.display = "none"
        })
    }


    async function showMore(event) {
        const btn = event.target

        const response = await fetch(`${detailsUrl}${btn.id}`)
        const data = await response.json()

        const box = btn.parentElement.parentElement
        const content = box.querySelector(".extra")
        content.innerHTML = ""

        const p = document.createElement("p")
        p.textContent = data.content

        content.appendChild(p)

        if (content.style.display === "none") {
            content.style.display = "block"
            btn.textContent = "Less"
        }

        else {
            content.style.display = "none"
            btn.textContent = "More"
        }

    }


    function getArticles() {
        fetch(getArticlesUrl)
            .then(response => response.json())
            .then(data => {
                loadArticles(data)

        }).catch()

    }

    getArticles()
}

solution();