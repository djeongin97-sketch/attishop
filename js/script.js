$(function(){
    $(".swiper-pagination").click(function(){
        $(".banner1").show();
    });
});


$(window).scroll(function(){
    var height = $(window).scrollTop();
    if(height>100){
        $(".top_button").fadeIn();
    } else{
        $(".top_button").fadeOut();
    }
});

$(function(){
    $(".banner_slide li").hide();
    $(".banner_slide li:nth-child(1)").show();
    setInterval(function(){
        $(".banner_slide li:nth-child(1)").fadeOut(3000).next().fadeIn(3000).end().appendTo(".banner_slide")
    },4000);
});




$(function(){
    $(".notice>li").click(function(){
        $(this).children(".text_info").slideToggle();
    });
});

