function passwordValidator(password) {
    function validateLength(password) {
        return password.length >= 6 && password.length <= 10
    }

    function checkLettersAndDigits(password) {
        return /^[a-zA-Z0-9]+$/.test(password)
    }
    
    function checkForTwoDigitsOrMore(password) {
        return /\d{2,}/.test(password)
    }

    let errors = []
    if (!validateLength(password)) {
        errors.push("Password must be between 6 and 10 characters")
    }

    if (!checkLettersAndDigits(password)) {
        errors.push("Password must consist only of letters and digits")
    }

    if (!checkForTwoDigitsOrMore(password)) {
        errors.push("Password must have at least 2 digits")
    }

    if (!errors.length) {
        console.log("Password is valid")
    }

    else {
        console.log(errors.join("\n"))
    }

}
