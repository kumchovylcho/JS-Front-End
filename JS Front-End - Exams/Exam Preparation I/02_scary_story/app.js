window.addEventListener("load", solve);

function solve() {
    const publishBtn = document.querySelector("#form-btn");

    const previewList = document.querySelector("#preview-list");

    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const age = document.querySelector("#age");
    const storyTitle = document.querySelector("#story-title");
    const genre = document.querySelector("#genre");
    const yourStory = document.querySelector("#story")
    const allFields = [firstName, lastName, age, storyTitle, genre, yourStory];

    publishBtn.addEventListener("click", publishStory);


    function validFields() {
        return !allFields.some(field => !field.value);
    }

    function createStory() {
        const newLi = document.createElement("li");
        newLi.classList.add("story-info");

        const article = document.createElement("article");

        const nameHeader = document.createElement("h4");
        nameHeader.textContent = `Name: ${firstName.value} ${lastName.value}`;

        const ageP = document.createElement("p");
        ageP.textContent = `Age: ${age.value}`;

        const titleP = document.createElement("p");
        titleP.textContent = `Title: ${storyTitle.value}`;

        const genreP = document.createElement("p");
        genreP.textContent = `Genre: ${genre.value}`;

        const storyP = document.createElement("p");
        storyP.textContent = yourStory.value;

        article.appendChild(nameHeader);
        article.appendChild(ageP);
        article.appendChild(titleP);
        article.appendChild(genreP);
        article.appendChild(storyP);

        newLi.appendChild(article);

        const saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save Story";

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit Story";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete Story";

        saveBtn.addEventListener("click", saveStory)
        editBtn.addEventListener("click", editStory)
        deleteBtn.addEventListener("click", deleteStory)

        newLi.appendChild(saveBtn);
        newLi.appendChild(editBtn);
        newLi.appendChild(deleteBtn);

        previewList.appendChild(newLi);
    }

    function publishStory() {
        if (validFields()) {
            createStory();
            publishBtn.disabled = true;
        }

        allFields.forEach(field => field.value = "");
    }

    function editStory(event) {
        publishBtn.disabled = false;
        const li = event.target.parentElement;
        const [fName, lName] = li.querySelector("article > h4").textContent.split("Name: ")[1].split(" ");
        const [storyAge, title, storyGenre, storyMsg] = li.querySelectorAll("article > p");

        firstName.value = fName;
        lastName.value = lName
        age.value = storyAge.textContent.split("Age: ")[1];
        storyTitle.value = title.textContent.split("Title: ")[1];
        genre.value = storyGenre.textContent.split("Genre: ")[1];
        yourStory.value = storyMsg.textContent;

        previewList.removeChild(li);

        disableAllButtons()
    }

    function saveStory() {
        const mainDiv = document.querySelector("#main")
        mainDiv.innerHTML = `<h1>Your scary story is saved!</h1>`
    }

    function deleteStory(event) {
        publishBtn.disabled = false;
        const li = event.target.parentElement;
        previewList.removeChild(li);
    }

    function disableAllButtons() {
        const [publish, ...disableBtns] = Array.from(document.querySelectorAll("button"));

        disableBtns.forEach(button => {
            button.disabled = true;
        });
    }
}
