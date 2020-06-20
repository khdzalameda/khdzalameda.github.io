(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  // $(".menu-toggle").click(function(e) {
  //   e.preventDefault();
  //   $("#sidebar-wrapper").toggleClass("active");
  //   $("body").toggleClass("active");
  //   $(".dim").toggleClass("active");
  //   $(".dim-active").toggleClass("active");
  //   $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  //   $(this).toggleClass("active");
  // });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    $(".button.js-scroll-trigger").removeClass("active");
    $(this).addClass("active");
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('a.scroll-to-top[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $("body").removeClass("active");
    $(".dim").removeClass("active");
    $(".dim-active").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Change sidebar menu on mobile
  // $(window).resize(function() {
  //     // This will fire each time the window is resized:
  //     if($(window).width() <= 425) {
  //       $( "a:contains(Home)" ).html('<i class="fas fa-home"></i>');
  //       $( "a:contains(About)" ).html('<i class="fas fa-user"></i>');
  //       $( "a:contains(Skills)" ).html('<i class="fas fa-code-branch"></i>');
  //       $( "a:contains(Portfolio)" ).html('<i class="fas fa-folder-open"></i>');
  //       $( "a:contains(Contact)" ).html('<i class="fas fa-mobile-alt"></i>');
  //     } else {
       
  //     }
  // }).resize();
 
  $(document).ready(function() {

    // Show skill titles
    $('.service-icon').hover(function() {
      $(this).next('.skill-title').css({'opacity' : '1', 'tranisition' : '.5s'});
    }, function() {
      $(this).next('.skill-title').css({'opacity' : '0', 'tranisition' : '.5s'});
    });
    
    // Initialize Owl Carousel for projects
    $('.owl-projects').owlCarousel({
      loop:true,
      margin:25,
      nav:false,
      dots:true,
      autoplay: false,
      items:1,
      slideBy: 1,
      autoplaySpeed: 500,
      rtl: false,
      navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'] ,
      responsive:{
        0:{
            items:1,
            nav:false,
            dots:true,
        },
        767:{
            items:1,
            nav:false,
            dots:true,
        },
        991:{
            items:1,
            nav:false,
            dots:true,
        }
      }
    });
  });
 
})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);
AOS.init();
document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in');
});
