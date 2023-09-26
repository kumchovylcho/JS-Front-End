function validate() {
    const emailPattern = /^([a-z]+)@([a-z]+)\.([a-z]+)$/

    const emailField = document.getElementById("email")

    emailField.addEventListener("change", validateEmail)

    function validateEmail() {
        const match = emailField.value.match(emailPattern)

        if (!match) {
            emailField.classList.add("error")
        }

        else {
            emailField.classList.remove("error")
        }
    }
}