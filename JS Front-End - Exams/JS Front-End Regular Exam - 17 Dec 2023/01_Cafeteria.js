function solve(arr) {

    const hasCoffeeTypeSkill = (baristaName, coffeeType) => {
        const hasSkill = cafeteria[baristaName].coffeeSkills.find(coffee => coffee === coffeeType);

        return hasSkill;
    }

    const prepareCoffee = (baristaName, shift, coffeeType) => {
        if (cafeteria[baristaName].shift !== shift || !hasCoffeeTypeSkill(baristaName, coffeeType)) {
            console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            return;
        }

        console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
    }

    const changeShift = (baristaName, newShift) => {
        cafeteria[baristaName].shift = newShift;
        console.log(`${baristaName} has updated his shift to: ${newShift}`);
    }

    const learnNewSkill = (baristaName, newCoffeeType) => {
        if (hasCoffeeTypeSkill(baristaName, newCoffeeType)) {
            console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
            return;
        }

        cafeteria[baristaName].coffeeSkills.push(newCoffeeType);
        console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
    }


    const numberOfBaristas = Number(arr.shift());
    const cafeteria = {};

    for (let i=0; i < numberOfBaristas; i++) {
        const [name, shift, coffees] = arr.shift().split(" ");

        cafeteria[name] = {
            name,
            shift,
            coffeeSkills: coffees.split(",")
        };
    }

    const operations = {
        "Prepare": prepareCoffee,
        "Change Shift": changeShift,
        "Learn": learnNewSkill,
    };

    let command = arr.shift()
    while (command !== "Closed") {
        const [operation, baristaName, ...data] = command.split(" / ");

        operations[operation](baristaName, ...data);

        command = arr.shift();
    }


    for (const baristaName in cafeteria) {
        console.log(`Barista: ${baristaName}, Shift: ${cafeteria[baristaName].shift}, Drinks: ${cafeteria[baristaName].coffeeSkills.join(", ")}`);
    }





}


// solve([
//     '3',
//       'Alice day Espresso,Cappuccino',
//       'Bob night Latte,Mocha',
//       'Carol day Americano,Mocha',
//       'Prepare / Alice / day / Espresso',
//       'Change Shift / Bob / night',
//       'Learn / Carol / Latte',
//       'Learn / Bob / Latte',
//       'Prepare / Bob / night / Latte',
//       'Closed']
//       )


// solve(['4',
// 'Alice day Espresso,Cappuccino',
// 'Bob night Latte,Mocha',
// 'Carol day Americano,Mocha',
// 'David night Espresso',
// 'Prepare / Alice / day / Espresso',
// 'Change Shift / Bob / day',
// 'Learn / Carol / Latte',
// 'Prepare / Bob / night / Latte',
// 'Learn / David / Cappuccino',
// 'Prepare / Carol / day / Cappuccino',
// 'Change Shift / Alice / night',
//  'Learn / Bob / Mocha',
// 'Prepare / David / night / Espresso',
// 'Closed'])