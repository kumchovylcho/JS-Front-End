function solve(addressBook) {
    let output = {}

    for (let data of addressBook) {
        let [name, address] = data.split(":")
        output[name] = address
    }

    for (let [name, address] of Object.entries(output).sort()) {
        console.log(`${name} -> ${address}`)
    }
}