const toggleMenuElemnt = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const closeMenuElement = document.getElementById('main-menu__close-icon');
const routerBack = document.getElementById('router-back');
const heratIcon = document.getElementsByClassName('heart2-button');
toggleMenuElemnt.addEventListener('click', () => {
    mainMenuElement.classList.toggle('show');
    toggleMenuElemnt.classList.toggle('close-toggle-menu');
});

closeMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('show');
});

routerBack.addEventListener('click', () => {
    window.history.back();
});

for (let i = 0; i < heratIcon.length; i++) {
    heratIcon[i].addEventListener('click', () => {
        heratIcon[i].classList.toggle('heart2-button--active');
        console.log(heratIcon[i]);
    });
}
