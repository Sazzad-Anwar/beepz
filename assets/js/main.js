new WOW().init();
// content: "\f659";

$(document).ready(function () {
    $('.menu__icon').on('click', () => {
        $('.menu__icon').toggleClass('bi bi-x')
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    let nav = document.getElementById('navbar');

    window.addEventListener('scroll', () => {

        if (window.innerWidth > 991) {

            $('#navbar+section').attr('style', `padding-top:${nav.offsetHeight}px !important`);

            if ($('#navbar').hasClass("index__page")) {

                if (window.scrollY > 50) {
                    nav.classList.add("nav__bg")
                    nav.classList.add("shadow-lg")
                    nav.classList.remove('bg-transparent')
                } else {
                    nav.classList.remove("nav__bg")
                    nav.classList.remove("shadow-lg")
                    nav.classList.add('bg-transparent')
                }
            }
        } else {
            $('#navbar+section').attr('style', `padding-top:0px !important`)
            nav.classList.remove('fixed-top')
            nav.classList.remove('shadow-lg')
        }
    })

    document.getElementById('year').innerHTML = new Date().getFullYear()

    let html = document.getElementsByTagName('html');
    // if (html.dir === 'rtl') {
    //     document.getElementsByClassName('slider__section slider__images').setAttribute('dir', "ltr")
    // }
});