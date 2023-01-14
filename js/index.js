$(function(){
    $(".scrollicon").hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $(".scrollicon").fadeIn('slow');
        } else {
            $(".scrollicon").fadeOut('slow');
        }
    })
    $(".scrollicon").bind("click",function(){
        $('html,body').animate({
            scrollTop: 0,
        },1000);
        return false;
    });
})