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

function tab() {

    $(".tab__wrapper .tabs__wrapper .tab").click(function() {
        $(".services__tabs .tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".services__tabs .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
}
tab()