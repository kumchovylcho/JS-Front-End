function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const table = Array.from(document.querySelectorAll("tbody > tr"))
      const searchWord = document.getElementById("searchField")

      table.forEach(item => {
         item.classList.remove('select')
         if(item.textContent.includes(searchWord.value) && searchWord.value.length > 0) {
            item.classList.add("select")
         }
      })

      searchWord.value = ""

   }
}