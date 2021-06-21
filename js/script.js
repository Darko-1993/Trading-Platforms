/* NAVBAR */

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 5 ) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    });
});

/* MOBILE NAV */

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    $('body').css("overflow","hidden");
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    $('body').css("overflow","auto");
  }



 



