/* MENU */

let menuActive = false;
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
            return menuActive = true;
        })
    }
    
}

showMenu('nav-toggle','nav-menu');

/* ativar e remover menu */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //ativar
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //remove mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* remover menu ao clicar fora */

const closeMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId);
    const toggle = document.getElementById(toggleId);

    document.addEventListener('click', (e) => {
        
        if (menuActive && !nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove('show'); 
            menuActive = false;
        }
    });
};

closeMenu('nav-menu', 'nav-toggle');

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})


/* SCROLL HOME */

sr.reveal('.home__title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home__img', {delay: 400});	
sr.reveal('.social__icon', {interval: 200});
sr.reveal('.home__social-icon', {interval: 200});

/* SCROLL ABOUT */
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {delay: 200});
sr.reveal('.about__data > p', {delay: 400});

/* SCROLL SKILLS */

sr.reveal('.skills__subtitle', {});
sr.reveal('.skills > p', {delay: 200});
sr.reveal('.skills__container my-skills', {
    interval: 200});

/*SCROLL WORK */

sr.reveal('.work__container my-work', {
    interval: 200,
    duration: 2000
});
