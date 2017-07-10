$(document).ready(function(){
    var $header = $('header');
    var $hamburgerMenu = $header.find('.hamburger-menu');
    var $menuItems = $header.find('.menu-items');

    $hamburgerMenu.click(function(){
        $(this).toggleClass('open');
        $header.toggleClass('open');
        $menuItems.toggleClass('open');
    });
});
