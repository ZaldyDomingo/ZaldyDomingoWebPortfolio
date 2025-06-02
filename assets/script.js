// Toggle mobile menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight active nav link on scroll and sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal animations config
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js text animation config
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Visual Studio Code Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// EmailJS contact form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let params = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        message: document.getElementById("contact-message").value
    };

    emailjs.send("service_o8yxc2p", "template_c4h6z34", params)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById('msg').textContent = "Email sent successfully!";
            document.getElementById('msg').style.color = "#61b752";
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log("FAILED...", error);
            document.getElementById('msg').textContent = "Failed to send email. Please check your internet or EmailJS settings.";
            document.getElementById('msg').style.color = "#ff3860";
        });
});
