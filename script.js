// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav-link');

const toggleMobileMenu = () => {
    menuBtn.classList.toggle('menu-btn-open');
    nav.classList.toggle('nav-open');
    overlay.classList.toggle('overlay-active');
    document.body.classList.toggle('no-scroll');
}

menuBtn.addEventListener('click', toggleMobileMenu);

if (window.window.innerWidth <= 500) {
    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', toggleMobileMenu);
    });
}

// Show header when user scrolls up
// Adaptation of @FluffyKitten's answer on StackOverflow
// https://stackoverflow.com/questions/63902512/js-show-hide-header-on-scroll-effect-but-only-after-the-header-has-scrolled

let prevScrollPos = window.scrollY;
const header = document.querySelector('.header');
const headerBottom = header.offsetTop + header.offsetHeight;

window.onscroll = () => {
    const currentScrollPos = window.scrollY;

    /* If we're scrolling up, or we haven't passed the header,
       show the header at the top */
    if (prevScrollPos > currentScrollPos || currentScrollPos < headerBottom) {
        header.style.top = "0";
    } else {
        // Otherwise we're scrolling down & have passed the header so hide it
        header.style.top = `-6rem`;
    }

    prevScrollPos = currentScrollPos;
}
