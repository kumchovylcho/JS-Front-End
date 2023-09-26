function reverseArray(n, arr) {
    const reverse = () => {
        newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.unshift(arr[i]);
        }

        return newArr;
    }

    console.log(reverse().join(" "));
}

