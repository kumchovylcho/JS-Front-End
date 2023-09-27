function solve(arr) {

    const isAlpha = (value) => {
        return /^[A-Za-z]+$/.test(value);
    };

    const findAstronautIndex = (astronautToFind) => {
        for (const astronaut in astronauts) {
            if (astronauts[astronaut].name === astronautToFind) {
                return astronaut;
            }
        }
    }

    const explore = (astronaut, energyNeeded) => {
        const astroObj = astronauts[findAstronautIndex(astronaut)];

        if (astroObj.energy >= energyNeeded) {
            astroObj.energy -= energyNeeded;
            console.log(`${astronaut} has successfully explored a new area and now has ${astroObj.energy} energy!`);
        } else {
            console.log(`${astronaut} does not have enough energy to explore!`);
        }
    };

    const refuel = (astronaut, amount) => {
        const astroObj = astronauts[findAstronautIndex(astronaut)];

        let refueled = amount;
        astroObj.energy += amount;
        if (astroObj.energy > 200) {
            refueled = 200 - (astroObj.energy - amount)
            astroObj.energy = 200;     
        }

        console.log(`${astronaut} refueled their energy by ${refueled}!`);
    };

    const breathe = (astronaut, amount) => {
        const astroObj = astronauts[findAstronautIndex(astronaut)];

        let recovered = amount;
        astroObj.oxygen += amount;
        if (astroObj.oxygen > 100) {
            recovered = 100 - (astroObj.oxygen - amount);
            astroObj.oxygen = 100;     
        }

        console.log(`${astronaut} took a breath and recovered ${recovered} oxygen!`);

    };

    const astronautNumbers = Number(arr.shift());
    const astronauts = [];
    for (let i = 0; i < astronautNumbers; i++) {
        const [name, oxygen, energy] = arr.shift().split(" ").map((x) => isAlpha(x) ? x : Number(x));

        astronauts.push({
            name: name,
            oxygen: oxygen,
            energy: energy
        })
    }

    commandHandler = {
        "Explore": explore,
        "Refuel": refuel,
        "Breathe": breathe
    };

    let command = arr.shift();
    while (command !== "End") {
        const [operation, astronaut, resource] = command.split(" - ").map((x) => isAlpha(x) ? x : Number(x));
        commandHandler[operation](astronaut, resource)

        command = arr.shift();
    }

    astronauts.forEach(astro => {
        console.log(`Astronaut: ${astro.name}, Oxygen: ${astro.oxygen}, Energy: ${astro.energy}`);
    })

}
