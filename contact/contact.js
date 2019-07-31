(function() {
    'use strict';
    window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();
$(window).on('scroll', function(){
    if($(window).scrollTop()>=100 && !$('nav').hasClass('nav')){
        $('nav').addClass('nav'); 
    }
    else if($(window).scrollTop()<100 && $('nav').hasClass('nav')){
        $('nav').removeClass('nav') 
    }
});

var yAxis, xs, ys, count = false;

var scollAnimation = function (event) {
    xAxis = scrollX;
    yAxis = scrollY;
    if (yAxis < 40) {
        document.querySelector("nav").classList.remove("activeNav");
        document.querySelector(".navbar").classList.remove("activeNavbar");
      
    } else if (yAxis > 40) {
        document.querySelector("nav").classList.add("activeNav");
        document.querySelector(".navbar").classList.add("activeNavbar");
       
    }
}

var stopScroll = function () {
    if (count) {
        window.scroll(xs, ys);
    }
}

document.querySelector(".menu").addEventListener("click", function () {
    this.classList.toggle("activeMenu");
    document.querySelector("nav").classList.toggle("navOnOff");
    count = !count;
    xs = scrollX;
    ys = scrollY;
    window.addEventListener("scroll", stopScroll);
});

window.addEventListener("scroll", scollAnimation); 