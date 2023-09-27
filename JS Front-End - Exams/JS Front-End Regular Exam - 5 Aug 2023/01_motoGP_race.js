function solve(arr) {

    const getDriverIndex = (driver) => {
        for (const rider in drivers) {
            if (drivers[rider].rider === driver) {
                return rider;
            }
        }
    };

    const stopForFuel = (rider, minFuel, changedPos) => {
        const driverIndex = getDriverIndex(rider);
        minFuel = Number(minFuel);
        changedPos = Number(changedPos);

        if (drivers[driverIndex].fuelCapacity < minFuel) {
            drivers[driverIndex].position = changedPos;
            console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPos}.`);
        } else {
            console.log(`${rider} does not need to stop for fuel!`);
        }  
    };

    const overtake = (rider1, rider2) => {
        const rider1Index = getDriverIndex(rider1);
        const rider2Index = getDriverIndex(rider2);

        const driver1Pos = drivers[rider1Index].position;
        const driver2Pos = drivers[rider2Index].position;

        if (driver1Pos < driver2Pos) {
            drivers[rider1Index].position = driver2Pos;
            drivers[rider2Index].position = driver1Pos;

            console.log(`${rider1} overtook ${rider2}!`);
        }
    };

    const engineFail = (rider, lapsLeft) => {
        const driverIndex = getDriverIndex(rider);
        drivers.splice(driverIndex, 1);

        console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
    };

    const driversCount = parseInt(arr.shift());
    const drivers = [];

    for (let i = 0; i < driversCount; i++) {
        const [rider, fuelCapacity, position] = arr.shift().split("|");

        drivers.push({
            rider: rider,
            fuelCapacity: Number(fuelCapacity) > 100 ? 100 : Number(fuelCapacity),
            position: Number(position)
        });
    }

    const operationHandler = {
        "StopForFuel": stopForFuel,
        "Overtaking": overtake,
        "EngineFail": engineFail,
    };

    let command = arr.shift();
    while (command !== "Finish") {
        const [operation, rider, ...data] = command.split(" - ");
        operationHandler[operation](rider, ...data);

        command = arr.shift();
    }


    for (const rider in drivers) {
        console.log(drivers[rider].rider);
        console.log(`  Final position: ${drivers[rider].position}`);
    }
}
