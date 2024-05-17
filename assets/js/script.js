//This code adds a class so that the Toggle menu shows//

const root = document.querySelector('#root')
const toggler = document.querySelector('#toggler')

toggler.addEventListener('click', ()=> {
    root.classList.toggle('open')
})

//This code allows the user to navigate the the different sections using the desktop menu// 

const menuLinks = document.querySelectorAll('.desktop_menu a');

menuLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor tag behavior

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});