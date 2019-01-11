// STICKY MENU //

let stickyNav = $('nav').offset().top;

function stickyFct() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNav) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}

$(window).scroll(function () {
    stickyFct();
    $(window).resize(function () {
        stickyNav = $('nav').offset().top;
        stickyFct();
    });
});

//******menu au click sur burger-menu */****/

$('.trabajo').click(function(){
    // console.log('hey');
    $('.clique').toggleClass('actif');
    $('body').toggleClass("hidden");
    

})
$('.burger-menu').click(function(){
    $('.clique').removeClass('actif');
})


//PARALLAX//
// $('.parallax-window').parallax({imageSrc: '../media/img/palmtree.jpeg'});
