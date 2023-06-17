function storeProvision(stock, orders) {
    let storage = {}

    for (let i = 0; i < stock.length; i+=2) {
        let name = stock[i]
        let quantity = parseInt(stock[i + 1])

        storage[name] = quantity
    }

    for (let i = 0; i < orders.length; i+=2) {
        let name = orders[i]
        let quantity = parseInt(orders[i + 1])

        if (name in storage) {
            storage[name] += quantity
            continue
        }

        storage[name] = quantity
    }

    for (const [product, quantity] of Object.entries(storage)) {
        console.log(`${product} -> ${quantity}`)
    }

}

