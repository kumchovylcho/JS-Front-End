function solve(list) {

    function findItem(item) {
        return initialList.includes(item);
    }

    function urgent(item) {
        if (findItem(item)) {
            return;
        }

        initialList.unshift(item);
    }

    function unnecessary(item, deleteCount=1) {
        if (findItem(item)) {
            initialList.splice(initialList.indexOf(item), deleteCount);
        }
    }

    function correct(oldItem, newItem) {
        if (!findItem(oldItem)) {
            return;
        }

        const index = initialList.indexOf(oldItem);
        initialList[index] = newItem;
    }

    function rearrange(item) {
        if (!findItem(item)) {
            return;
        }

        unnecessary(item);
        initialList.push(item);
    }

    const initialList = list.shift().split("!");
    list.pop();

    const commands = {
        "Urgent": urgent,
        "Unnecessary": unnecessary,
        "Correct": correct,
        "Rearrange": rearrange,
    }

    for (const info of list) {
        const [command, ...data] = info.split(" ");
        commands[command](...data);
    }

    console.log(initialList.join(", "));
}
