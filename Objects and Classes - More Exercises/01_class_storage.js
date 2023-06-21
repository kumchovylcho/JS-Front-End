class Storage {
    constructor(capacity) {
        this.capacity = capacity
        this.storage = []
        this.totalCost = 0
    }

    addProduct(product) {
        this.storage.push(product)
        this.capacity -= product.quantity
        this.totalCost += product.quantity * product.price
    }

    getProducts() {
        let output = []
        for (const product of this.storage) {
            output.push(JSON.stringify(product))
        }

        return output.join("\n")
    }
}
