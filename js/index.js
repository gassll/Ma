const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('active');
});

new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        prevEl: '.swiper__btn--prev',
        nextEl: '.swiper__btn--next',

    }
});