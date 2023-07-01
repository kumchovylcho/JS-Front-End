function solve() {
   const addButtons = Array.from(document.querySelectorAll(".add-product"))
   const checkOutBtn = document.querySelector(".checkout")
   const textArea = document.querySelector("textarea")

   let cart = []
   let totalPrice = 0

   function addToCart(itemName, itemPrice) {
      textArea.textContent += `Added ${itemName} for ${itemPrice.toFixed(2)} to the cart.\n`
      cart.push({name: itemName})
      totalPrice += itemPrice
   }

   function checkOut() {
      let uniqueProducts = [...new Set(cart.map(product => product.name))]

      textArea.value += `You bought ${uniqueProducts.join(", ")} for ${totalPrice.toFixed(2)}.`

      checkOutBtn.disabled = true

      addButtons.forEach(button => {
         button.disabled = true
      })
   }


   addButtons.forEach(button => {
      button.addEventListener("click", event => {
         let productDiv = event.target.parentElement.parentElement
         let productName = productDiv.querySelector(".product-title").textContent
         let productPrice = parseFloat(productDiv.querySelector(".product-line-price").textContent)

         addToCart(productName, productPrice)
      })
   })

   checkOutBtn.addEventListener("click", checkOut)
}