//This code allows the user to navigate the the different sections using the desktop menu// 

const menuLinks = document.querySelectorAll('.desktop_menu a');

menuLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor tag behavior

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

//This code shows a lateral menu for the mobile version

const root = document.querySelector('#root');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
    root.classList.toggle('open');
});