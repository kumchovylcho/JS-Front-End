function solve(list) {

    function checkForPiece(piece) {
        return pianoPieces.hasOwnProperty(piece)

    }

    function add(piece, composer, key) {
        if (checkForPiece(piece)) {
            return `${piece} is already in the collection!`
        }

        pianoPieces[piece] = {composer: composer, key: key}
        return `${piece} by ${composer} in ${key} added to the collection!`
    }


    function remove(piece) {
        if (!checkForPiece(piece)) {
            return `Invalid operation! ${piece} does not exist in the collection.`
        }

        delete pianoPieces[piece]
        return `Successfully removed ${piece}!`
    }


    function changeKey(piece, newKey) {
        if (!checkForPiece(piece)) {
            return `Invalid operation! ${piece} does not exist in the collection.`
        }

        pianoPieces[piece].key = newKey
        return `Changed the key of ${piece} to ${newKey}!`
    }


    const pieces = parseInt(list.shift())
    list.pop()
    const pianoPieces = {}

    for (let i = 0; i < pieces; i++) {
        const [piece, composer, key] = list.shift().split("|")

        pianoPieces[piece] = {composer: composer, key: key}
    }


    const operations = {
        "Add": add,
        "Remove": remove,
        "ChangeKey": changeKey,
    }
    const iterations = list.length
    for (let i = 0; i < iterations; i++) {
        const [command, ...info] = list.shift().split("|")

        const result = operations[command](...info)
        console.log(result)
    }


    for (const [piece, data] of Object.entries(pianoPieces)) {
        console.log(`${piece} -> Composer: ${data.composer}, Key: ${data.key}`)
    }
}


solve([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
])