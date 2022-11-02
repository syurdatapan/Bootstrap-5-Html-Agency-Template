$(document).ready(function () {

    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    });

    //PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 24,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center: true
            }
        }
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 1000
    });
});