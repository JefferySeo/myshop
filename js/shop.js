$(function(){
    $('.menu').mouseover(function(){
        $(this).html('<span class="material-icons">more_horiz</span>');
    });
    $('.menu').mouseout(function(){
        $(this).html('<span class="material-icons">menu</span>');
    });
    $('.menu').stop().click(function(){
        $(this).html('<span class="material-icons">close</span>');
    });
})