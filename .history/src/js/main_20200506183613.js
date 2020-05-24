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
        // breakpoint: 760, // работает для всего слайдера а не только для мобильной весии  или не работает вообще
        // settings: {
        //     prevArrow: false,
        //     nextArrow: false,
        // }
    });
}
slider()