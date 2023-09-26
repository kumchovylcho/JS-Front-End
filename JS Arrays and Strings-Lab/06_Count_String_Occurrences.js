function solve(text, word) {
    let occurrences = 0;

    let textArr = text.split(" ");
    for (const arrWord of textArr) {
        if (arrWord === word) {
            occurrences += 1;
        }
    }

    console.log(occurrences);
}
