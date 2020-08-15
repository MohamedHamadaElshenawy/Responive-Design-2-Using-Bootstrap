$(function(){
    'use strict';
    $(window).scroll(function(){
        if($(this).scrollTop() > $(".navbar").height()){
            if(!$(".navbar").hasClass("scrolled")){
                $(".navbar").addClass("scrolled");
            }
        }else{
            $(".navbar").removeClass("scrolled");
        }
    });
    
    
    $(".tabs .tab-names ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("." + $(this).data("value")).slideDown(700).siblings().slideUp(700);
    });
    
    $(".pricing-box").hover(function(){
        $(this).animate({
            "margin-top": "-42px"
        },500);
        $(this).children(".description").slideDown(500);
    },function(){
        $(this).animate({
            "margin-top": "0px"
        },500);
        $(this).children(".description").slideUp(500);
    });
    
    $(".navbar .collapse ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".navbar-collapse").removeClass("in");
        $("html,body").animate({
            scrollTop: $($(this).data("value")).offset().top - 65
        },1350);
    });
});