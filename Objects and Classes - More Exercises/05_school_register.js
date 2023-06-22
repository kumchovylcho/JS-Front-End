function schoolRegister(list) {
    let output = {}
    for (let info of list) {
        let [name, grade, avgScore] = info.split(", ")
        name = name.split(": ")[1]
        grade = parseInt(grade.split(": ")[1])
        avgScore = parseFloat(avgScore.split(": ")[1])

        if (avgScore >= 3) {
            grade += 1
            if (!output.hasOwnProperty(grade)) {
                output[grade] = {}
                output[grade].students = []
                output[grade].totalScore = 0
            }
            output[grade].students.push(name)
            output[grade].totalScore += avgScore
        }
    }

    for (let grade of Object.entries(output)) {
        console.log(`${grade[0]} Grade`)
        console.log(`List of students: ${grade[1].students.join(", ")}`)
        const score = (grade[1].totalScore / grade[1].students.length).toFixed(2)
        console.log(`Average annual score from last year: ${score}`)
        console.log()
    }
}
