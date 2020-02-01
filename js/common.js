$(document).ready(function() {
    $(".menu-btn").on("click", function() {
        $("nav").slideToggle(200);
    });
    $(".click-top").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, '400');
    });
    $(function() {
 
        $('div.tabs__caption').on('click', 'div:not(.active)', function() {
          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
       
    });

    $(".vido-box").on("click", function(){
       $(this).removeClass("play-icon");
    });

    $(".video-play").on("click", function(){
        $(this)[0].play();
        $(this).attr('controls',true);
    });

});