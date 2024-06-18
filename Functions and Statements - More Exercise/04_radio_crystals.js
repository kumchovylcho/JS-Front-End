function radioCrystals(thickness) {
    let finalThickness = thickness[0];
    thickness = thickness.slice(1, thickness.length);
    const resources = {
        cut: 4,
        lap: 0.8,
        grind: 20,
        etch: 2,
    };

    function hasEnoughResources(thickness, goalThickness, operation) {
        if (operation === 'cut') {
            return thickness / resources.cut >= goalThickness - 1;
        } else if (operation === 'lap') {
            return thickness * resources.lap >= goalThickness - 1;
        } else if (operation === 'grind') {
            return thickness - resources.grind >= goalThickness - 1;
        } else if (operation === 'etch') {
            return thickness - resources.etch >= goalThickness - 1;
        }
    }

    function transportAndWash(crystalThickness) {
        return Math.floor(crystalThickness);
    }

    for (let crystal of thickness) {
        console.log(`Processing chunk ${crystal} microns`);

        let operations = {
            Cut: 0,
            Lap: 0,
            Grind: 0,
            Etch: 0,
            'X-ray': 0,
        };

        while (crystal !== finalThickness) {
            if (hasEnoughResources(crystal, finalThickness, 'cut')) {
                crystal /= resources.cut;
                operations['Cut']++;
            } else if (hasEnoughResources(crystal, finalThickness, 'lap')) {
                crystal *= resources.lap;
                operations['Lap']++;
            } else if (hasEnoughResources(crystal, finalThickness, 'grind')) {
                crystal -= resources.grind;
                operations['Grind']++;
            } else if (hasEnoughResources(crystal, finalThickness, 'etch')) {
                crystal -= resources.etch;
                operations['Etch']++;
            } else {
                crystal += 1;
                operations['X-ray']++;
            }

            // since the X-ray operation can be executed only once,
            // this is very valid if statement to remove the
            // repetitiveness of the code.
            if (!operations['X-ray']) {
                crystal = transportAndWash(crystal);
            }
        }

        for (let [operation, counter] of Object.entries(operations)) {
            if (counter > 0) {
                console.log(`${operation} x${counter}`);

                if (operation !== 'X-ray') {
                    console.log('Transporting and washing');
                }
            }
        }

        console.log(`Finished crystal ${finalThickness} microns`);
    }
}
