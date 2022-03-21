
// navbar uchun toogle
const navbarButton = document.getElementById('navbarButton');
const navbarNav = document.getElementById('navbarNav');
const accauntTopNav = document.getElementById('accauntTopNav');
const tooglerButton = document.getElementById('tooglerButton');

navbarButton.addEventListener('click', () => {
    navbarNav.classList.toggle('colapse-nav');
    accauntTopNav.classList.toggle('d-none');
    tooglerButton.classList.toggle('click');
});

// footer uchun toogle, dastavka batafsil
const BatafsilFoot = document.getElementById('BatafsilFoot');
const dastavBody = document.getElementById('dastavBody');
const yopishFoot = document.getElementById('yopishFoot');
BatafsilFoot.addEventListener('click', () => {
    dastavBody.classList.toggle('full');
    BatafsilFoot.classList.toggle('d-none');
    yopishFoot.classList.toggle('d-none');
});
yopishFoot.addEventListener('click', () => {
    dastavBody.classList.toggle('full');
    BatafsilFoot.classList.toggle('d-none');
    yopishFoot.classList.toggle('d-none');
});

// when scrooll body, position fixed navbar
const header = document.getElementById('header');
window.onscroll = function (e) {
    if (window.pageYOffset > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}