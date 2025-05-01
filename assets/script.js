let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100); // Corrected
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['IT Student at STI Alaminos ','Software Developer','Visual Studio Code Enthusiast'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Light/Dark mode toggle
const darkModeToggle = document.querySelector('#dark-mode-icon');
const body = document.body;

// Persist dark mode preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        darkModeToggle.classList.replace(
            savedTheme === 'light-mode' ? 'bx-moon' : 'bx-sun',
            savedTheme === 'light-mode' ? 'bx-sun' : 'bx-moon'
        );
    }
});

darkModeToggle.addEventListener('click', () => {
    const isLightMode = body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode', !isLightMode);
    darkModeToggle.classList.replace(
        isLightMode ? 'bx-moon' : 'bx-sun',
        isLightMode ? 'bx-sun' : 'bx-moon'
    );
    localStorage.setItem('theme', isLightMode ? 'light-mode' : 'dark-mode');
});