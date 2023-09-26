function solve(string, word) {
    
    while (string.includes(word)) {
        string = string.replace(word, "*".repeat(word.length));
    }

    console.log(string);
}
