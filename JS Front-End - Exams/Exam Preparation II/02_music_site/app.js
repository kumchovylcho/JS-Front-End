window.addEventListener('load', solve);

function solve() {
    const addBtn = document.querySelector("#add-btn");
    const [...inputs] = document.querySelectorAll("input");
    const songsDiv = document.querySelector(".all-hits-container");
    const totalLikes = document.querySelector(".likes > p");
    const savedSongsDiv = document.querySelector(".saved-container");

    addBtn.addEventListener('click', addSong);

    function createElement(type,
                           textContent="",
                           value="",
                           klass="",
                           img="",
                           listener=""
                           ) {
        const element = document.createElement(type);

        if (textContent) {
            element.textContent = textContent;
        }

        if (value) {
            element.value = value;
        }

        if (klass) {
            element.classList.add(klass);
        }

        if (img) {
            element.src = img;
        }

        if (listener) {
            element.addEventListener("click", listener);
        }

        return element;
    }

    function resetFields() {
        inputs.forEach(input => input.value = "");
    }

    function addSong(event) {
        event.preventDefault();

        if (inputs.some(input => !input.value)) {
            return;
        }

        const [genre, name, author, date] = inputs;

        const newDiv = createElement("div", "", "", "hits-info");
        newDiv.appendChild(createElement("img", "", "", "", "./static/img/img.png"));
        newDiv.appendChild(createElement("h2", `Genre: ${genre.value}`));
        newDiv.appendChild(createElement("h2", `Name: ${name.value}`));
        newDiv.appendChild(createElement("h2", `Author: ${author.value}`));
        newDiv.appendChild(createElement("h3", `Date: ${date.value}`));
        newDiv.appendChild(createElement("button", "Save song","", "save-btn", "", saveSong));
        newDiv.appendChild(createElement("button", "Like song","", "like-btn", "", likeSong));
        newDiv.appendChild(createElement("button", "Delete","", "delete-btn", "", deleteSong));

        songsDiv.appendChild(newDiv);

        resetFields()
    }

    function saveSong(event) {
        const div = event.target.parentElement;

        for (let i = 0; i < 2; i++) {
            div.removeChild(div.lastChild.previousSibling);
        }

        songsDiv.removeChild(div);
        savedSongsDiv.appendChild(div);
    }

    function likeSong(event) {
        event.target.disabled = true;
        const [text, likes] = totalLikes.textContent.split(": ");
        totalLikes.textContent = `${text}: ${parseInt(likes) + 1}`;
    }

    function deleteSong(event) {
        const div = event.target.parentElement;
        const parentDiv = div.parentElement;

        parentDiv.removeChild(div);
    }
}