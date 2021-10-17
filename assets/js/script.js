
let slideRight = {
    distance: '100%',
    origin: 'left',
    easing: 'ease-in',
    opacity: 0,
    duration: 600,
};

let popUp = {
    easing: 'ease-in',
    duration: 600,
};

let slideDown = {
    distance: '100%',
    origin: 'top',
    easing: 'ease-in',
    opacity: 0,
    duration: 500,
    mobile: false
};

const delay1 = [300, 500];
const class1 = ['.title', '.sub-title']

const delaySkills = [600, 700, 800, 900, 1000];
const classSkills = ['.php', '.python', '.html', '.js', '.css'];

function responsive(){
    if ($(window).width() <= 991){
        $('#navbarNav').addClass('collapse navbar-collapse')
        $('#navItem').removeClass('justify-content-end')
        $('.nav-link').removeClass('fs-4')
        $('.navbar-brand').removeClass('fs-1')
        $('.skill-box').removeClass('container')
        $('.skill-box').attr('style', 'width: $(window).width();')
    } else {
        $('#navbarNav').removeClass('collapse navbar-collapse')
        $('#navItem').addClass('justify-content-end')
        $('.nav-link').addClass('fs-4')
        $('.navbar-brand').addClass('fs-1')
        $('.skill-box').addClass('container')
    }

    if ($(window).width() <= 350){
        $('.group-skill').removeClass('justify-content-end')
        $('#col-skill').removeClass('col')
    } else {
        $('#col-skill').addClass('col')
    }
}

function animation(){
    ScrollReveal().reveal('.navbar-brand', slideRight);
    ScrollReveal().reveal('.nav-link1', slideDown)
    setTimeout(function(){
        ScrollReveal().reveal('.nav-link2', slideDown);
    }, 200)
    setTimeout(function(){
        ScrollReveal().reveal('.nav-link3', slideDown);
    }, 300)
    setTimeout(function(){
        ScrollReveal().reveal('.nav-link4', slideDown);
    }, 400)
    ScrollReveal().reveal('.introTxt', slideRight);
    ScrollReveal().reveal('.btn', slideRight);
    ScrollReveal().reveal('.avatar', popUp);

    ScrollReveal().reveal('.skill-box', {
        distance: '100%',
        origin: 'top',
        easing: 'ease-in',
        opacity: 0,
        duration: 500,
    });
    
    for (i = 0; i < class1.length; i++){
        ScrollReveal().reveal(class1[i], {
            distance: '100%',
            origin: 'top',
            easing: 'ease-in',
            duration: 500,
            delay: 300*i
        });
    }

    for (i = 0; i < classSkills.length; i++){
        ScrollReveal().reveal(classSkills[i], {
            easing: 'ease-in',
            duration: 600,
            delay: 500 * i
        });
    }
}

animation();
responsive();

$( window ).resize(function() {
    responsive();
    $('.nav-link').attr('style', 'visibility: visible;')
    $('.skill-box').attr('style', 'visibility: visible;')
});
