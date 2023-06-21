function catalogue(list) {
    let output = {}
    for (let item of list.sort()) {
        let [product, price] = item.split(" : ")
        let mainKey = product[0]

        if (!output.hasOwnProperty(mainKey)) {
            output[mainKey] = []
        }

        output[mainKey].push({product, price})
    }

    for (const group of Object.keys(output)) {
        console.log(group)

        for (const product of output[group].sort((a, b) => a.product.localeCompare(b.product))) {
            console.log(`  ${product.product}: ${product.price}`)
        }
    }
}