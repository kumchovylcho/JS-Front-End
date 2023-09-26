function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const bestRestaurantText = document.querySelector("#outputs > #bestRestaurant > p")
   const bestRestaurantEmployees = document.querySelector("#outputs > #workers > p")
   let bestRestaurants = {}
   bestRestaurantText.textContent = ""
   bestRestaurantEmployees.textContent = ""

   function displayBestRestaurant(restaurantName) {
      const sortedWorkers = Object.values(bestRestaurants[restaurantName].employees).sort((a, b) => b.salary - a.salary)

      let bestWorkers = []
      sortedWorkers.forEach(worker => {
         console.log(worker)
         bestWorkers.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })

      const restaurant = bestRestaurants[restaurantName]
      bestRestaurantText.textContent = `Name: ${restaurantName} Average Salary: ${restaurant.avgSalary.toFixed(2)} Best Salary: ${sortedWorkers[0].salary.toFixed(2)}`
      bestRestaurantEmployees.textContent = bestWorkers.join(" ")
   }


   function findBestRestaurant(allRestaurants) {
      let bestRestaurant = ""
      let bestAvgSalary = 0
      for (const [name, data] of Object.entries(allRestaurants)) {
         if (data.avgSalary > bestAvgSalary) {
            bestAvgSalary = data.avgSalary
            bestRestaurant = name
         }
      }
      return bestRestaurant
   }


   function onClick () {
      const input = document.querySelector("textarea").value
      let restaurants = Array.from(JSON.parse(input))

      for (const restaurant of restaurants) {
         let [restaurantName, employees] = restaurant.split(" - ")

         if (!bestRestaurants.hasOwnProperty(restaurantName)) {
            bestRestaurants[restaurantName] = {}
            bestRestaurants[restaurantName].employees = []
            bestRestaurants[restaurantName].totalSalary = 0
            bestRestaurants[restaurantName].avgSalary = 0
         }

         employees.split(", ").forEach(employee => {
            let [name, salary] = employee.split(" ")

            salary = parseFloat(salary)
            bestRestaurants[restaurantName].employees.push({name: name, salary: salary})
            bestRestaurants[restaurantName].totalSalary += salary
         })

         bestRestaurants[restaurantName].avgSalary = bestRestaurants[restaurantName].totalSalary / bestRestaurants[restaurantName].employees.length
      }

      const bestRestaurant = findBestRestaurant(bestRestaurants)

      displayBestRestaurant(bestRestaurant)
   }
}