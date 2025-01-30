


// Open the sidenav 
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

// Close/hide the sidenav 
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

// The explore scroll in facilities page
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });



