function employees(names) {
    let allEmployees = []

    for (let employee of names) {
        allEmployees.push(
            {
                name: employee,
                number: employee.length
            }
        )
    }

    for (let employee of allEmployees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`)
    }
}