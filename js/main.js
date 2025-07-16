$(document).ready(function () {
    $(".hero-block").click(function (e) {
        e.preventDefault();
        $('.hero-block').removeClass('active')
        $(this).addClass('active')
    });

    // gallery
    $('.gallery-item').click(function () {
        let value = $(this).attr('data-filter')
        // console.log(value);
        if (value === 'all') {
            $('.gallery-img').show(1000)
        } else {
            $('.gallery-img').not('.' + value).hide(1000)
            $('.gallery-img').filter('.' + value).show(1000)
        }

        $(this).addClass('active').siblings().removeClass('active')
    })

    $('.customer-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    // burger menu

    $('.burger').click(function (e) {
        e.preventDefault();
        $('.burger').toggleClass('active')
        $('.nav').toggleClass('active')
        $('body').toggleClass('hiden')

    });

    $('.link').click(function (e) {
        $('.nav').removeClass('active')
        $('.burger').removeClass('active')
        $('body').removeClass('hiden')
    })

    // btn up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.btn-up').fadeIn()
        } else {
            $('.btn-up').fadeOut()
        }
    });
    $('.btn-up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });
});