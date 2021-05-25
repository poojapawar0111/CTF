function openNav() {
    document.getElementById("menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".menu-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


$(document).ready(function(){
    $("#menu").click(function(){
        $(".sidenav").hide();
    });
    $(".navbar-toggle").click(function(){
        $(".sidenav").show();
    });
});

$(document).ready(function()
{

  $('text-carousel').carousel({
  interval: 3000,
  cycle: true
});

  $('#arrow').bind("click", function () {
  console.log('clicked');
                  $('html, body').animate({ scrollTop: 0 }, 1200);
                return false;
            });


})
// top scroll
/*window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("arrow").style.display = "block";
    } else {
        document.getElementById("arrow").style.display = "none";
    }
}
// move to top of the page
function topFunction() {

     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
}
*/
