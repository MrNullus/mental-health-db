let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {

    if (window.scrollY > 2600) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

const toggle = document.querySelector(".dark-mode-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

//Português
$(function() {
    $(".br").click(function() {
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
    });
});

//English
$(function() {
    $(".en").click(function() {
        $(".language-selected").text("en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
    });
});
