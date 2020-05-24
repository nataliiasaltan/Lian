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



$(document).ready(function() {

    $('.icon-align-justify').click(function() {
        $('.nav-list').slideToggle();
    });
});

function slider() {

    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        dots: true,
    });


}