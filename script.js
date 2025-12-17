document.addEventListener('DOMContentLoaded', function() {

    /*=============== MOSTRAR/ESCONDER MENU MOBILE ===============*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav__link');

    const openMenu = () => {
        navMenu.classList.add('show-menu');
    };

    const closeMenu = () => {
        navMenu.classList.remove('show-menu');
    };

    if (navToggle) {
        navToggle.addEventListener('click', openMenu);
    }

    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /*=============== INICIALIZAÇÃO DA BIBLIOTECA DE ANIMAÇÃO (AOS) ===============*/
    AOS.init({
        duration: 800, // Duração da animação em ms
        once: true, // Animação acontece apenas uma vez
        offset: 50, // Inicia a animação 50px antes do elemento aparecer
    });

});
