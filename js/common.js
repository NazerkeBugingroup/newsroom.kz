$(document).ready(function () {
    $(".click-menu").click(function(){
        $(".menu-left").fadeIn();
    });
    $(".ic-close-menu").click(function(){
        $(".menu-left").fadeOut();
    });
    $('.slid-banners').slick({
        autoplay:true,
        autoplaySpped:1500,
        dots:false,
        arrows:false,
        fade:true
    });
    setTimeout(function() {
        $('.mod-fb').fadeIn(500)
    }, 2000);
    $(".icon-close").click(function(){
        $(".mod-fb").fadeOut();
    });
});


