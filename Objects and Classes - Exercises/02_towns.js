function towns(list) {
    let data = []

    for (let item of list) {
        let [town, latitude, longitude] = item.split(" | ")
        const info = {
            town: town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2),
        }

        data.push(info)
    }

    for (let item of data) {
        console.log(item)
    }
}
