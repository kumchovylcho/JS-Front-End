function students(list) {
    function getCredits(string) {
        const start = string.indexOf("[")
        const end = string.indexOf("]")

        return parseInt(string.substring(start + 1, end))
    }

    function getUsername(string) {
        const start = 0
        const end = string.indexOf("[")

        return string.substring(start, end)
    }

    const output = {}

    for (let info of list) {
        if (info.includes(": ")) {
            info = info.split(": ")
            const course = info[0]
            const capacity = parseInt(info[1])

            if (!output.hasOwnProperty(course)) {
                output[course] = {}
                output[course].capacity = 0
                output[course].students = []
            }

            output[course].capacity += capacity
        }

        else if (info.includes(" joins ")) {
            info = info.split(" with email ")
            const credits = getCredits(info[0])
            const username = getUsername(info[0])
            const email = info[1].split(" joins ")[0]
            const course = info[1].split(" joins ")[1]

            if (!output.hasOwnProperty(course)) {
                continue
            }

            if (output[course].capacity === 0) {
                continue
            }

            output[course].capacity -= 1
            output[course].students.push({
                name: username,
                email: email,
                credits: credits,
            })
        }
    }

    const sortedByCountStudents = Object.entries(output).sort((a, b) => b[1].students.length - a[1].students.length)

    sortedByCountStudents.forEach(course => {
        const courseName = course[0]
        const placesLeft = course[1].capacity
        console.log(`${courseName}: ${placesLeft} places left`)

        const students = course[1].students
        students.sort((a, b) => b.credits - a.credits).forEach(student => {
            console.log(`--- ${student.credits}: ${student.name}, ${student.email}`)
        })
    })
}