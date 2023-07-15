function solve(list) {

    function retake(overTakingHorse, overTakenHorse) {
        const indexOverTakingHorse = horses.indexOf(overTakingHorse);
        const indexOverTakenHorse = horses.indexOf(overTakenHorse);

        if (indexOverTakingHorse < indexOverTakenHorse) {
            horses[indexOverTakingHorse] = overTakenHorse;
            horses[indexOverTakenHorse] = overTakingHorse;

            console.log(`${overTakingHorse} retakes ${overTakenHorse}.`);
        }
    }

    function trouble(horseName) {
        const indexOfHorse = horses.indexOf(horseName);

        if (indexOfHorse > 0) {
            const otherHorse = horses[indexOfHorse - 1];
            const otherHorseIndex = horses.indexOf(otherHorse);

            horses[otherHorseIndex] = horseName;
            horses[indexOfHorse] = otherHorse;

            console.log(`Trouble for ${horseName} - drops one position.`);
        }
    }

    function rage(horseName) {
        const indexOfHorse = horses.indexOf(horseName);
        const overTakenHorse = indexOfHorse + 2;

        horses.splice(indexOfHorse, 1)
        horses.splice(overTakenHorse, 0, horseName);

        console.log(`${horseName} rages 2 positions ahead.`)
    }

    function miracle() {
        const lastHorse = horses.shift();
        horses.push(lastHorse);

        console.log(`What a miracle - ${lastHorse} becomes first.`);
    }

    const horses = list.shift().split("|");

    const operations = {
        "Retake": retake,
        "Trouble": trouble,
        "Rage": rage,
        "Miracle": miracle,
    };

    while (list[0] !== "Finish") {
        const [command, ...info] = list.shift().split(" ");
        operations[command](...info);
    }

    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}