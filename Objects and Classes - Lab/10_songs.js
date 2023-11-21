function solve(info) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let countSongs = info.shift()
    let typeSong = info.pop()
    let songs = []

    for (let i = 0; i < countSongs; i++) {
        let [type, name, time] = info[i].split("_")
        songs.push(new Song(type, name, time))
    }

    const outputSongs = typeSong === "all"
        ? songs
        : songs.filter(song => song.typeList === typeSong)

    outputSongs.forEach(song => console.log(song.name))
}





// function solve(info) {
//
//     class Song {
//         constructor(typeList, name, time) {
//             this.typeList = typeList
//             this.name = name
//             this.time = time
//         }
//     }
//
//     let countSongs = info.shift()
//     let typeSong = info.pop()
//     let songs = []
//
//     for (let i = 0; i < countSongs; i++) {
//         let [type, name, time] = info[i].split("_")
//         songs.push(new Song(type, name, time))
//     }
//
//     if (typeSong === "all") {
//         songs.forEach((x) => console.log(x.name))
//     }
//
//     else {
//         let filterSongs = songs.filter((x) => x.typeList === typeSong)
//         filterSongs.forEach((x) => console.log(x.name))
//     }
// }
