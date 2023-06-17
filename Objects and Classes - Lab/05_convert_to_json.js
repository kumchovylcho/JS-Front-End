function convert(firstName, lastName, hairColor) {
    const person = {
        'name': firstName,
        'lastName': lastName,
        'hairColor': hairColor
    }

    console.log(JSON.stringify(person))
}
