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
const tipNavContMask = document.getElementById('tipNavContMask');
const tipNavCont = document.getElementById('tipNavCont');
const tipsNav = document.getElementById('tipsNav');
const navTopNav = document.getElementById('navTopNav');

let scroll = window.pageYOffset;
let scrollTop = 0;
window.onscroll = function () {
    if (window.pageYOffset > 104) {
        header.classList.add('fixed');
        if (window.pageYOffset > tipNavCont.offsetHeight + 104) {
            scroll = window.pageYOffset;
            tipNavContMask.classList.remove('d-none');
            tipNavContMask.offsetHeight = tipNavCont.offsetHeight;
            tipNavCont.classList.add('tip-nav-con');
            tipsNav.classList.add('top_sticky');
            if (scroll <= scrollTop) {
                tipNavCont.classList.add('d-none');
                navTopNav.classList.remove('d-none');
                console.log('if scroll:' + scroll + ' scrollTop:' + scrollTop);
            } else {
                tipNavCont.classList.remove('d-none');
                navTopNav.classList.add('d-none');
                console.log('else scroll:' + scroll + ' scrollTop:' + scrollTop);
            }
        } else {
            tipNavCont.classList.remove('tip-nav-con');
            tipsNav.classList.remove('top_sticky');
            navTopNav.classList.remove('d-none');
            tipNavCont.classList.remove('d-none');
        }
    } else {
        header.classList.remove('fixed');
        tipNavCont.classList.remove('tip-nav-con');
        tipsNav.classList.remove('top_sticky');
        navTopNav.classList.remove('d-none');
        tipNavCont.classList.remove('d-none');
    }
    scrollTop = scroll;
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

// checkbox filterlar uchun 
const checkbox_label = document.querySelectorAll('.checkbox_label');
checkbox_label.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('checked')
    });
});