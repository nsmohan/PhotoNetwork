
/* search.js: This application is responsibe for the in browser search and display of data on the table related to the clients. 


__author__      = "Tony Egizii"
__copyright__   = "Copy Right 2019. Rodaledi Inc"

*/

function myFunction() {
    // Declare variables
    var input, filter, table, tr, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("hoverTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      tds = tr[i].querySelectorAll("td");
    
      if (tds.length ) {
        txtValue = tr[i].innerText.trim();
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

function myCapture() {
    
}
