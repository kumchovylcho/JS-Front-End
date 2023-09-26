function solve(words, text) {
    words = words.split(", ");
    text = text.split(" ");
    
    while (words.length > 0) {

        let currentWord = words.shift();

        for (let i=0; i < text.length; i++) {
            if (text[i].split("").some(symbol => symbol !== "*")) {
                continue
            }

            if (currentWord.length === text[i].length) {
                text[i] = currentWord;
            }
        }
    }

    console.log(text.join(" "));
}
