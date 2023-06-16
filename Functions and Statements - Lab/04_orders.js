function orders(product, quantity) {
    let productPrices = {
        "coffee": 1.5,
        "water": 1,
        "coke": 1.4,
        "snacks": 2,
    }

    let totalPrice = (productPrices[product] * quantity).toFixed(2)
    console.log(totalPrice)
}