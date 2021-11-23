// Landing Page Animation
ScrollReveal().reveal('#title-name', { duration : 1500, opacity: 0 });
ScrollReveal().reveal('#sub-title', {
    duration : 1500,
    delay : 300
});

// Projects Page Animation
ScrollReveal().reveal('#menu1', { duration : 1500 });
ScrollReveal().reveal('#title-project1', { 
    duration : 1500,
    delay : 200,
    opacity: 0
});
ScrollReveal().reveal('#img-project-id', { 
    duration : 1500,
    delay : 200
});
ScrollReveal().reveal('#sub-title-project1', { 
    duration : 1500,
    delay : 400
});
ScrollReveal().reveal('#btn-project', { 
    duration : 1500,
    delay : 600
});

ScrollReveal().reveal('#menu2', { duration : 1500 });
ScrollReveal().reveal('#about', { 
    duration : 1500,
    delay : 200
});
ScrollReveal().reveal('#languages', { 
    duration : 1500,
    delay : 400
});
ScrollReveal().reveal('#contact', { 
    duration : 1500,
    delay : 600
});

(function ( $ ) {
    $.fn.replaceClass = function(c1, c2) {
        return this.removeClass(c1).addClass(c2);
    };
}( jQuery ));

//parallax
$(window).scroll(function () {
    let scrollY = $(this).scrollTop();

    if (scrollY > 200 && scrollY < 1224){
        if($('#bg-project').css( 'opacity' ) == 0){
            $('#bg-project').stop().fadeTo( 500, 1 )
        }
    } else {
        if($('#bg-project').css( 'opacity' ) == 1){
            $('#bg-project').stop().fadeTo( 500, 0 )
        }
    }

    if (scrollY > 100) {
        $('.navbar-brand').css('visibility', 'hidden');
        $('.navbar').removeClass('background-light');
    } else {
        $('.navbar-brand').css('visibility', '');
        $('.navbar').addClass('background-light');
    }

    if (scrollY > 720 && scrollY < 1401) {
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('navbar-dark');
    } else {
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').addClass('navbar-light');
    }
    
    $('#title').css({
        'transform' : 'translate(0px, '+ scrollY/1.2 +'%)'
    });

    $('.img-project').css('top', scrollY * 0.2 + 'px');
    $('.text-project').css('top', scrollY * 0.3 + 'px');
})

// Change Background
$('.carousel-button').click(function(){
    if($('#carousel1').hasClass('active')){
        $('#bg-project').css('background-image', 'url(assets/img/palang_web_design.jpg)');
    } else {
        $('#bg-project').css('background-image', 'url(assets/img/anime_web_design.jpg)');
    }
});

//responsive
if ($(window).width() <= 750){
    $('.col-image').replaceClass('text-start', 'text-center')
    $('.nav').removeClass('navbar-nav');
    $('.nav-link').css('color', '#3C3C3C')
    $('#about').replaceClass('fs-4', 'fs-5')
    $('.col-about').replaceClass('col', 'text-center')
    $('hr:first').width('200px')
    $('hr').width('100px')
    $('.navbar').removeClass('sticky-top')
    $('.col-project').removeClass('col')
    $('.nav-link').replaceClass('font-20', 'fs-6')
} else {
    $('.col-image').replaceClass('text-center', 'text-start')
    $('.nav').addClass('navbar-nav');
    $('#about').replaceClass('fs-5', 'fs-4')
    $('.col-about').replaceClass('text-center', 'col')
}
