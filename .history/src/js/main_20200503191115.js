function search() {
    $('.search-btn').on('click', function() {
        var $this = $(this).closest('.header__wrapper');
        if ($this.hasClass('open')) {
            $this.removeClass('open');
            $(this).children('.icon-iconfinder_cross_214654').removeClass().addClass('icon-search');
        } else {
            $(this).children('.icon-search').removeClass().addClass('icon-iconfinder_cross_214654');
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