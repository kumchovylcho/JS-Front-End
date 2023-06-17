function solve(catData) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`
        }
    }

    for (let data of catData) {
        let [name, age] = data.split(" ")

        console.log(new Cat(name, age).meow())
    }
}