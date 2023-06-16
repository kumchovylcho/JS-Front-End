function login(loginData) {

    function reverseString(string) {
        let result = []
        for (let i = string.length - 1; i >= 0; i--) {
            result.push(string[i])
        }

        return result.join("")
    }

    let username = loginData[0]
    let tries = 0

    for (let i = 1; i < loginData.length; i++) {
        tries++

        if (username !== reverseString(loginData[i])) {
            if (tries === 4) {
                console.log(`User ${username} blocked!`)
                break
            }
            console.log("Incorrect password. Try again.")
        }

        else {
            console.log(`User ${username} logged in.`)
            break
        }
    }
}


login(['sunny','rainy','cloudy','sunny','not sunny'])
console.log()
login(['Acer','login','go','let me in','recA'] )