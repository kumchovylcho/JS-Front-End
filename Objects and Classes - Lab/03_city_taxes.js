function cityTaxes(name, population, treasury) {

    function collectTaxes() {
        this.treasury += this.population * this.taxRate
    }

    function applyGrowth(percentage) {
        this.population *= 1 + (percentage / 100)
    }

    function applyRecession(percentage) {
        this.treasury *= 1 - (percentage / 100)
    }

    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: collectTaxes,
        applyGrowth: applyGrowth,
        applyRecession: applyRecession,
    }
}
