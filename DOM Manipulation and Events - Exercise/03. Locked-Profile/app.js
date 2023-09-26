function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName("button"))

    buttons.forEach(button => {
        button.addEventListener("click", showMore)
    })
    
    function showMore(event) {
        const btn = event.target
        const profile = btn.parentElement
        const children = Array.from(profile.children)
        const unlocked = children[4]
        const additionalInfo = children[9]

        if (!unlocked.checked) {
            return
        }

        if (btn.textContent === "Show more") {
            additionalInfo.style.display = "block"
            btn.textContent = "Hide it"
        }

        else if (btn.textContent === "Hide it") {
            additionalInfo.style.display = "none"
            btn.textContent = "Show more"
        }
    }
}