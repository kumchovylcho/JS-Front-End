function solve(word, text) {
    const isFound = () => {
        for (const currWord of text) {
            if (word === currWord) {
                return true;
            }
        }
        return false;
    }

    word = word.toLowerCase();
    text = text.toLowerCase().split(" ");


    console.log(isFound() ? word : `${word} not found!`);
}