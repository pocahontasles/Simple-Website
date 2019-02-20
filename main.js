$('.show-modal').click(function () {
    $('.modal-overlay').addClass('active');
    var top = $(document).scrollTop();
    $('.modal-overlay').css('top', top);
    /*$('html,body').css('overflow', 'hidden');*/
});
$(window).scroll(function () {
    var top = $(document).scrollTop();
    $('.modal-overlay').css('top', top);
});
$('[data-close]').click(':not(.modal-body)', function () {
    $('.modal-overlay').removeClass('active');
    /*$('html,body').css('overflow', 'auto');*/
});
$('.modal-body').click(function (e) {
    e.stopPropagation();
});

