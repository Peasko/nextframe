$(document).ready(function(){
    var $header = $('header');
    var $hamburgerMenu = $header.find('.hamburger-menu');
    var $menuItems = $header.find('.menu-items');
    var $body = $('body');

    $body.scrollspy({ target: '#menu-items' });

    //https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp

    $hamburgerMenu.click(function(){
        $(this).toggleClass('open');
        $header.toggleClass('open');
        $menuItems.toggleClass('open');
    });

    var iteration = 1;
    function swapBg() {
        if (iteration === 4) {
            iteration = 1;
        } else {
            iteration++;
        }
        // $body.addClass('bg-' + iteration);

        $body.css({
            "background-image": "url('images/bg0" + iteration + ".jpg')",
            "background-image": "-moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%), url('images/bg0" + iteration + ".jpg')",
            "background-image": "-o-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%), url('images/bg0" + iteration + ".jpg')",
            "background-image": "-webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%), url('images/bg0" + iteration + ".jpg')",
            "background-image": "-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(60%, rgba(0, 0, 0, 1))), url('images/bg0" + iteration + ".jpg')",
            "background-image": "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 60%), url('images/bg0" + iteration + ".jpg')",
        });
        setTimeout(swapBg, 7000);
    }
   setTimeout(swapBg, 7000);
});
