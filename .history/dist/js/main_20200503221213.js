function search() {
    $('.search-btn').on('click', function() {
        var $this = $(this).closest('.header__wrapper');
        if ($this.hasClass('open')) {
            $this.removeClass('open');
            alert(1212);
            $(this).children('.icon-iconfinder_cross_214654').removeClass().addClass('icon-search');
        } else {
            $(this).children('.icon-search').removeClass().addClass('icon-iconfinder_cross_214654');
            $this.addClass('open');
        }
        return false;

    });
}
search()


function openDrop() {
    $('body').on('click', '.js-open-drop', function() {
        var $this = $(this).closest('.drop-holder');
        if ($this.hasClass('open-drop')) {
            $this.removeClass('open-drop');

        } else {
            $('.drop-holder').removeClass('open-drop');
            $this.addClass('open-drop');
        }
        return false;
    });
}
openDrop()

$(document).ready(function() {

    $('.icon-align-justify').click(function() {
        $('.nav-list').slideToggle();
    });

    $('.slik-slider').slick();


});