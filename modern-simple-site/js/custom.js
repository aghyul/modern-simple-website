// services

$(document).ready(function(){
    new WOW().init();
});

// Work popup

$(document).ready(function(){
    $("#popup-image").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
          
    });
});

// Owl Carousel
// team-members
$(document).ready(function(){
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
// testimonials
$(document).ready(function(){
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
// clients
$(document).ready(function(){
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

// stats counterup 

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

// navigation 

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
            $('nav').removeClass("nav-bg-dark");
            $('#back-to-top').fadeOut();
        } else {
            $('nav').addClass("nav-bg-dark");
            $('#back-to-top').fadeIn();
        }
    });
});

// smooth scroll
$(document).ready(function(){
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get all section id. Exm. #home #team
        var section = $(this).attr("href");
        // console.log(section);
        $('html, body').animate({
            scrollTop: $(section).offset().top - 55
        }, 1250, "easeInOutExpo");
    });
});

