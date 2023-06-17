function inventory(list) {
    let heroInfo = []

    for (let item of list) {
        let [name, level, items] = item.split(" / ")

        const hero = {
            name: name,
            level: parseInt(level),
            items: items
        }

        heroInfo.push(hero)
    }

    heroInfo.sort((a, b) => a.level - b.level)
    for (let hero of heroInfo) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}
