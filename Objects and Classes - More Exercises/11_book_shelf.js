function bookShelf(list) {
    function checkGenreExistence(genre) {
        for (const id in books) {
            if (books[id].genre === genre) {
                return id
            }
        }
        return false
    }

    const books = {}

    for (let info of list) {
        if (info.includes(" -> ")) {
            const [id, genre] = info.split(" -> ")

            if (!books.hasOwnProperty(id)) {
                books[id] = {}
                books[id].genre = genre
                books[id].genreShelf = []
            }
        }

        else if (info.includes(": ")) {
            info = info.split(", ")
            const [title, author] = info[0].split(": ")
            const genre = info[1]

            const id = checkGenreExistence(genre)
            if (!id) {
                continue
            }

            books[id].genreShelf.push({
                title: title,
                author: author,
            })
        }
    }

    const sortedShelves = Object.entries(books).sort((a, b) => b[1].genreShelf.length - a[1].genreShelf.length)

    sortedShelves.forEach(shelf => {
        console.log(`${shelf[0]} ${shelf[1].genre}: ${shelf[1].genreShelf.length}`)

        shelf[1].genreShelf.sort((a, b) => a.title.localeCompare(b.title)).forEach(book => {
            console.log(`--> ${book.title}: ${book.author}`)
        })
    })
}
