class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type
        this.model = model
        this.parts = parts
        this.parts.quality = this.parts.power * this.parts.engine
        this.fuel = fuel
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }
}

