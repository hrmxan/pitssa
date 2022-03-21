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
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}
const filterButton = document.getElementById('filterButton');
const actionsSection = document.getElementById('actionsSection');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

var tooglerActive = true;
const filterButtonClick = () => {
    if (tooglerActive) {
        actionsSection.classList.toggle('closed');
        header.classList.toggle('blur_back');
        main.classList.toggle('blur_back');
        footer.classList.toggle('blur_back');
        // setTimeout(() => {
        //     actionsSection.classList.toggle('d-none');
        // }, 600);
    }
}

filterButton.addEventListener('click', filterButtonClick);
const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const filter3 = document.getElementById('filter3');
const filter4 = document.getElementById('filter4');
const filter5 = document.getElementById('filter5');
const filter6 = document.getElementById('filter6');
const filter7 = document.getElementById('filter7');
filter1.addEventListener('click', filterButtonClick);
filter2.addEventListener('click', filterButtonClick);
filter3.addEventListener('click', filterButtonClick);
filter4.addEventListener('click', filterButtonClick);
filter5.addEventListener('click', filterButtonClick);
filter6.addEventListener('click', filterButtonClick);
filter7.addEventListener('click', filterButtonClick);