"use strict";

// Header Scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 120) {
        $("#header").addClass("darkHeader");
    } else {
        $("#header").removeClass("darkHeader");
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: true,
    autoplayTimeout: 500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        }
    }
});


