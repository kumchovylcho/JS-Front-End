function solve(text) {
    const isAlpha = (value) => {
        let pattern = /^[A-Za-z]+$/;

        return pattern.test(value);
    }

    text = text.split(" ");

    const specialWords = [];
    for (const word of text) {
        if (word[0] !== "#") {
            continue;
        }

        const currWord = word.slice(1,)

        if (!currWord.length) {
            continue;
        }

        if (!isAlpha(currWord)) {
            continue;
        }

        specialWords.push(currWord);
        
    }
    
    console.log(specialWords.join("\n"));
}
