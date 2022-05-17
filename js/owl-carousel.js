$(document).ready(function () {
    $(".zo-slider-brands").owlCarousel({
        margin: 80,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 4
            },

            1200: {
                items: 6
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
    });
})

$(document).ready(function () {
    $(".zo-footer-brands").owlCarousel({
        margin: 60,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 3
            },

            600: {
                items: 3
            },

            1200: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 4000,
    });
})

$(document).ready(function () {
    $(".zo-slider-banner").owlCarousel({
        margin: 0,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },

            1200: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 5000,
    });
})

$(document).ready(function () {
    $(".zo-slider-products").owlCarousel({
        margin: 0,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },

            600: {
                items: 3
            },

            1200: {
                items: 4
            }
        },
        autoplay: false,
        autoplayTimeout: 5000,
    });
})