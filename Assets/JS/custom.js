//  Initialize animate on scroll
AOS.init();

// var navbarCloseBtn = document.getElementById('navbar-close');
// var hamburgerBtn = document.getElementById('hamburger');
// var navbar = document.getElementById('navbar');
var toggleIcon = document.getElementById('toggle-icon');
var featureIcons = document.getElementsByClassName('price-feature__icon');
// var leftCircles = document.getElementById('left-circles');
// var footerCircles = document.getElementById('footer-circles');
// var logos = document.getElementsByClassName('logo');
// var footerLogos = document.getElementsByClassName('footer-logo');


// navbarCloseBtn.addEventListener('click', function(){
//     navbar.classList.toggle("open");
// })

// hamburgerBtn.addEventListener('click', function(){
//     navbar.classList.toggle("open");
// })

toggleIcon.addEventListener('click', function(){
    let currTheme = document.documentElement.getAttribute("data-theme"); 
    if(currTheme == 'light'){
        document.documentElement.setAttribute('data-theme', 'dark');
        for(var i = 0; i < featureIcons.length; i++){
            featureIcons[i].setAttribute('src', 'Assets/Images/creo_price_white.svg');
        }
        // leftCircles.setAttribute('src', 'img/side-circles.png');
        // footerCircles.setAttribute('src', 'img/footer-circles.png');
        // var i = toggleIcon.firstElementChild;

        // i.setAttribute('class', 'fa fa-moon-o');

        // for(var i = 0; i < logos.length; i++){
        //     logos[i].setAttribute('src', 'img/logo-light.png');
        // }

        // for(var i = 0; i < footerLogos.length; i++){
        //     footerLogos[i].setAttribute('src', 'img/logo-light.png');
        // }
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        for(var i = 0; i < featureIcons.length; i++){
            featureIcons[i].setAttribute('src', 'Assets/Images/creo_price_black.svg');
        }
        // leftCircles.setAttribute('src', 'img/side-circles__light.png');
        // footerCircles.setAttribute('src', 'img/footer-circles__light.png');
        // var i = toggleIcon.firstElementChild;

        // i.setAttribute('class', 'fa fa-sun-o');
        
        // for(var i = 0; i < logos.length; i++){
        //     logos[i].setAttribute('src', 'img/logo-dark.png');
        // }
        
        // for(var i = 0; i < footerLogos.length; i++){
        //     footerLogos[i].setAttribute('src', 'img/logo-dark.png');
        // }
    }
   
})