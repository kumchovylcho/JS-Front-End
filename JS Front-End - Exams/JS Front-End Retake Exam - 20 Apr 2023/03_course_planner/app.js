function solve() {

    function createElement(type,
                           textContent="",
                           klass=[],
                           id="",
                           listener="") {
        const element = document.createElement(type);

        if (textContent) {
            element.textContent = textContent;
        }

        if (klass.length > 0) {
            klass.forEach(klassName => element.classList.add(klassName));
        }

        if (id) {
            element.id = id;
        }

        if (listener) {
            element.addEventListener("click", listener);
        }

        return element;
    }

    function loadCourses() {
        listDiv.innerHTML = "";

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {

                Object.values(data).forEach(item => {
                    const newDiv = createElement("div", "", ["container"], item._id);

                    newDiv.appendChild(createElement("h2", item.title));
                    newDiv.appendChild(createElement("h3", item.teacher));
                    newDiv.appendChild(createElement("h3", item.type));
                    newDiv.appendChild(createElement("h4", item.description));
                    newDiv.appendChild(createElement("button", "Edit Course", ["edit-btn"], "", editCourseHelper));
                    newDiv.appendChild(createElement("button", "Finish Course", ["finish-btn"], "", finishCourse));

                    listDiv.appendChild(newDiv);
                })
            })
            .catch();
    }

    function addCourse(event) {
        event.preventDefault();

        const newCourse = {
            title: courseTitle.value,
            teacher: teacherName.value,
            type: courseType.value,
            description: description.value,
        }

        courseTitle.value = "";
        teacherName.value = "";
        courseType.value = "";
        description.value = "";

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(newCourse)
        })
            .then(() => loadCourses())
            .catch();
    }

    function editCourse() {
        const newCourse = {
            title: courseTitle.value,
            teacher: teacherName.value,
            type: courseType.value,
            description: description.value,
        }

        addBtn.disabled = false;
        editBtn.disabled = true;

        fetch(`${baseUrl}${editId}`, {
            method: "PUT",
            body: JSON.stringify(newCourse),
        })
            .then(() => loadCourses())
            .catch();
    }

    function editCourseHelper(event) {
        const course = event.target.parentElement;
        editId = course.id;

        const titleContent = course.querySelector("h2").textContent;
        const [name, type] = course.querySelectorAll("h3");
        const descriptionContent = course.querySelector("h4").textContent;

        courseTitle.value = titleContent;
        courseType.value = type.textContent;
        teacherName.value = name.textContent;
        description.value = descriptionContent;

        listDiv.removeChild(course);

        addBtn.disabled = true;
        editBtn.disabled = false;
    }

    function finishCourse(event) {
        const deleteId = event.target.parentElement.id;

        console.log(deleteId)

        fetch(`${baseUrl}${deleteId}`, {
            method: "DELETE",
        })
            .then(() => loadCourses())
            .catch();
    }

    const baseUrl = "http://localhost:3030/jsonstore/tasks/";

    const listDiv = document.querySelector("#list")
    const loadBtn = document.querySelector("#load-course");
    const addBtn = document.querySelector("#add-course");
    const editBtn = document.querySelector("#edit-course");

    const [courseTitle, courseType, teacherName] = document.querySelectorAll("input");
    const description = document.querySelector("#description");

    loadBtn.addEventListener("click", loadCourses);
    addBtn.addEventListener("click", addCourse);
    editBtn.addEventListener("click", editCourse);

    let editId = "";

}

solve();