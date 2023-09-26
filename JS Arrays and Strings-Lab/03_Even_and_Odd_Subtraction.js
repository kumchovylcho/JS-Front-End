function solve(arr) {
    oddSum = 0;
    evenSum = 0;

    for (let num of arr) {
        if (num % 2 !== 0) {
            oddSum += num;
            continue;
        }

        evenSum += num;
    }

    console.log(evenSum - oddSum);
}
