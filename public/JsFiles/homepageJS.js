//jshint esversion:6


// $("#slideshow > div:gt(0)").hide();
//
// setInterval(function() {
//   $('#slideshow > div:first')
//     .fadeOut(3000)
//     .next()
//     .fadeIn(3000)
//     .end()
//     .appendTo('#slideshow');
// }, 3000);


$(document).ready(function (){
  $("#slideshow > div:gt(0)").hide();
  setInterval(function(){
    $('#slideshow > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow');
      },  3000);

});


/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
