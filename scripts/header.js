$(document).ready(function(){
    var $header = $('header');
    var $hamburgerMenu = $header.find('.hamburger-menu');
    var $menuItems = $header.find('.menu-items');
    var $body = $('body');
    var $backgroundImages = $body.find('.bg-img');

    $body.scrollspy({ target: '#menu-items' });

    //https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
    $('header .menu-items a, footer .arrows-wrapper').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $hamburgerMenu.click(function(){
        $(this).toggleClass('open');
        $header.toggleClass('open');
        $menuItems.toggleClass('open');
    });

    var iteration = 0;
    function swapBg() {
        var tempIter = iteration;
        if (iteration === 3) {
            $backgroundImages.eq(iteration).removeClass('show');
            iteration = 0;
        } else {
            iteration++;
            $backgroundImages.eq(iteration).addClass('show');
            if (tempIter !== 0) {
                setTimeout(function(){
                    $backgroundImages.eq(tempIter).removeClass('show');
                }, 1000);
            }
        }

        setTimeout(swapBg, 7000);
    }
   setTimeout(swapBg, 7000);
});
