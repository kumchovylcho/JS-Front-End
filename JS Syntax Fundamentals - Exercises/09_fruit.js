function fruit(fruit, weightGrams, pricePerKg) {
    let kgs = (weightGrams / 1000)
    let moneyNeeded = pricePerKg * kgs
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`
)
}
