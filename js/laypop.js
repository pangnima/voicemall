$(document).ready(function(){
    $('.selectBox').on('click' , function(){
        $(this).toggleClass('active');
    })
    
    $('.selectTab > li ').on('click' , function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})