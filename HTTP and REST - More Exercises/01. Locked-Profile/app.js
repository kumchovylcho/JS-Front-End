async function lockedProfile() {
    const profilesUrl = "http://localhost:3030/jsonstore/advanced/profiles"
    const profile = document.querySelector(".profile")
    const main = document.querySelector("#main")


    const response = await fetch(profilesUrl)
    const data = await response.json()

    const loadProfiles = () => {
        main.innerHTML = ""
        for (const info of Object.values(data)) {
            const copyProfile = profile.cloneNode(true)

            const [username, email, age] = Array.from(copyProfile.querySelectorAll("input")).slice(2)
            const showInfo = copyProfile.querySelector(".user1Username")

            username.value = info.username
            email.value = info.email
            age.value = info.age
            showInfo.style.display = "none"

            const showMoreBtn = copyProfile.querySelector("button")
            showMoreBtn.addEventListener("click", showMoreInfo)

            main.appendChild(copyProfile)

        }
    }

    loadProfiles()

    function showMoreInfo(event) {
        const profile = event.target.parentElement

        const [locked, unlocked] = profile.querySelectorAll("input[type='radio']")
        const showInfo = profile.querySelector(".user1Username")

        if (unlocked.checked) {
            event.target.textContent = "Hide it"
            showInfo.style.display = "inline-block"
        }

        else {
            event.target.textContent = "Show more"
            showInfo.style.display = "none"
        }
    }

}