
//REFERENZE

var hamburgerMenu = $('.hamburger-menu');
var hamburger = $('.header-right > a');
var close = $('.close');

hamburger.click(function(){
    hamburgerMenu.show(2000);
})

close.click(function(){
    hamburgerMenu.hide(2000);
})