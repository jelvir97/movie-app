const movieContainer = $('#movie-container');
const movieInput = $('#movie');
const ratingInput = $('#rating');
const subBtn = $('#sub-btn');

subBtn.click(function(e){
    e.preventDefault();
    if(0 > ratingInput.val() || ratingInput.val()>10) return;
    if(movieInput.val().length < 2) return;

    const $tr = $(`<tr class="${movieInput.val()}"><td>${movieInput.val()}</td><td>${ratingInput.val()}</td></tr>`);
    $('<button class="del-btn">Delete</button>').appendTo($tr);
    $tr.appendTo(movieContainer);
});

movieContainer.on('click','.del-btn',function(evt){
    $(evt.target).parent().remove();
});

$('thead').click(sortTable);


function sortAlph(){
    const trs = $(tr);
    const classArr = $.map(trs,function(row){
        return row.attr('class');
    })
}



// following code from w3schools.com
function sortTable() {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector("#movie-container");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }