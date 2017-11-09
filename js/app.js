//SCROLL

var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('header').outerHeight();

$(document).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').fadeOut(600);
        
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').fadeIn(600);

        }
        
    }
    
    lastScrollTop = st;
}

const formulaire= $('#formulaire');
let formName = $("#nom");
let formMail= $("#courriel");
let formMsg= $("#message");
let formButton= $("formBtn");

formulaire.submit(sendform);

function sendform (event){
    if(formName.val().length < 5){
      alert("Vous n'avez pas indiqué votre Nom et Prénom.");
    }
    else if(formMail.val().length < 5){
        alert("Vous n'avez pas indiqué votre adresse mail.")
    }
    else if(formMail.val().length < 5){
        alert("Vous n'avez pas écrit de message.")
    }
    else{
        
    }
}
