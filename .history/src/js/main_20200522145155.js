function search() {
    $('.search-btn').on('click', function() {
        var $this = $(this).closest('.header__wrapper');
        if ($this.hasClass('open')) {
            $this.removeClass('open');
            $(this).children('.icon-close').removeClass().addClass('icon-search');
        } else {
            $(this).children('.icon-search').removeClass().addClass('icon-close');
            $this.addClass('open');
        }
        return false;
    });
}
search()


function burger() {
    $('.icon-align-justify').click(function() {
        $('.nav-list').slideToggle();
    });
}
burger()


function slider() {

    $('.single-item').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        dots: true,

    });
}
slider()


function fadeSlider() {
    $('.fade__slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',

    });
}
fadeSlider()


function sliderHead

function sliderTwo() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // prevArrow: '<button type="button" class="slick-button slider-prev">prev</button>',
        // nextArrow: '<button type="button" class="slick-button slider-next">next</button>',
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        focusOnSelect: true
    });
}
sliderTwo()


// function tab() {

//     $(".tabs .tab__head .tab__item").click(function() {
//         $(".tabs .tab__head .tab__item").removeClass("active").eq($(this).index()).addClass("active");
//         $(".tabs .tab__content-holder").hide().eq($(this).index()).fadeIn()
//     }).eq(0).addClass("active");
// }
// tab()



$('.js-tab-trigger').click(function() { //tabs

})
$('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');
});
$('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');

    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
});