$(document).ready(function() {
    $(".menu-btn").on("click", function() {
        $("nav").slideToggle(200);
    });
    $(".click-top").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, '400');
    });
});