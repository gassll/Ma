const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('active');
});

// где изучение JS?)