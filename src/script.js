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