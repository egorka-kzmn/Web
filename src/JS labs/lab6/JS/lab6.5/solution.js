function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchInput = document.getElementById('searchField').value.toLowerCase();
      const rows = document.querySelectorAll('tbody tr');

      for (const row of rows) {
         row.classList.remove('select');
         const cells = row.querySelectorAll('td');

         for (const cell of cells) {
            if (cell.textContent.toLowerCase().includes(searchInput)) {
               row.classList.add('select');
               break;
            }
         }
      }
   }
}
