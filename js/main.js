// navbar uchun toogle
const navbarButton = document.getElementById('navbarButton');
const navbarNav = document.getElementById('navbarNav');
const accauntTopNav = document.getElementById('accauntTopNav');
const tooglerButton = document.getElementById('tooglerButton');
var fixedTogler = false;
var fixedCount = 0;

navbarButton.addEventListener('click', () => {
    navbarNav.classList.toggle('colapse-nav');
    accauntTopNav.classList.toggle('d-none');
    tooglerButton.classList.toggle('click');
    navbarNav.classList.forEach(
        (item) => {
            if (item == 'colapse-nav') {
                fixedCount++;
            }
        }
    )
    if (fixedCount >= 1) {
        fixedTogler = true;
    } else {
        fixedTogler = false;
    }
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
const miniActions = document.getElementById('miniActions');

let scroll = window.pageYOffset;
let scrollTop = 0;
window.onscroll = function () {
    if (window.pageYOffset > 104) {
        header.classList.add('fixed');
        miniActions.classList.remove('d-none');
        if (window.pageYOffset > tipNavCont.offsetHeight + 104 && fixedTogler == false) {
            scroll = window.pageYOffset;
            tipNavContMask.classList.remove('d-none');
            tipNavContMask.offsetHeight = tipNavCont.offsetHeight;
            tipNavCont.classList.add('tip-nav-con');
            tipsNav.classList.add('top_sticky');
            if (scroll <= scrollTop) {
                tipNavCont.classList.add('d-none');
                navTopNav.classList.remove('d-none');
            } else {
                tipNavCont.classList.remove('d-none');
                navTopNav.classList.add('d-none');
            }
        } else {
            tipNavCont.classList.remove('tip-nav-con');
            tipsNav.classList.remove('top_sticky');
            navTopNav.classList.remove('d-none');
            tipNavCont.classList.remove('d-none');
        }
    } else {
        header.classList.remove('fixed');
        miniActions.classList.add('d-none');
        tipNavCont.classList.remove('tip-nav-con');
        tipsNav.classList.remove('top_sticky');
        navTopNav.classList.remove('d-none');
        tipNavCont.classList.remove('d-none');
    }
    scrollTop = scroll;
}

// action oyna
const actionsSection = document.getElementById('actionsSection');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const actionOn = () => {
    actionsSection.classList.remove('closed');
    header.classList.add('blur_back');
    main.classList.add('blur_back');
    footer.classList.add('blur_back');
}
const actionOff = () => {
    actionsSection.classList.add('closed');
    header.classList.remove('blur_back');
    main.classList.remove('blur_back');
    footer.classList.remove('blur_back');
}


// Filter actions

const filterButton = document.getElementById('filterButton');
const filterBody = document.getElementById('filterBody');

const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const filter3 = document.getElementById('filter3');
const filter4 = document.getElementById('filter4');
const filter5 = document.getElementById('filter5');
const filter6 = document.getElementById('filter6');
const filter7 = document.getElementById('filter7');

const filterOn = () => {
    filterBody.classList.remove('off');
}
const filterOff = () => {
    filterBody.classList.add('off');
}

const filterOnToggle = () => {
    actionOn();
    filterOn();
}
const filterOffToggle = () => {
    actionOff();
    filterOff();
}

filterButton.addEventListener('click', filterOffToggle);

filter1.addEventListener('click', filterOnToggle);
filter2.addEventListener('click', filterOnToggle);
filter3.addEventListener('click', filterOnToggle);
filter4.addEventListener('click', filterOnToggle);
filter5.addEventListener('click', filterOnToggle);
filter6.addEventListener('click', filterOnToggle);
filter7.addEventListener('click', filterOnToggle);
    // checkbox filter buttonlaarini o'chirib yoqish
const checkbox_label = document.querySelectorAll('.checkbox_label');
checkbox_label.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('checked')
    });
});


// product actions

const productBody = document.getElementById('productBody');
const productButton = document.getElementById('productButton');

const product1 = document.getElementById('pitssaCard1');
const product2 = document.getElementById('pitssaCard2');
const product3 = document.getElementById('pitssaCard3');
const product4 = document.getElementById('pitssaCard4');
const product5 = document.getElementById('pitssaCard5');
const product6 = document.getElementById('pitssaCard6');
const product7 = document.getElementById('pitssaCard7');
const product8 = document.getElementById('pitssaCard8');
const productBodyScroll = document.getElementById('productBodyScroll');

const productOn = () => {
    productBody.classList.remove('off');
}
const productOff = () => {
    productBody.classList.add('off');
}
const productOnToggle = () => {
    actionOn();
    productOn();
}
const productOffToggle = () => {
    actionOff();
    productOff();
}

product1.addEventListener('click', productOnToggle);
product2.addEventListener('click', productOnToggle);
product3.addEventListener('click', productOnToggle);
product4.addEventListener('click', productOnToggle);
product5.addEventListener('click', productOnToggle);
product6.addEventListener('click', productOnToggle);
product7.addEventListener('click', productOnToggle);
product8.addEventListener('click', productOnToggle);

productButton.addEventListener('click', productOffToggle);

// product body scrols da amallar
productBodyScroll.onscroll = function () {
    if (productBodyScroll.scrollTop > 0) {
        productBodyScroll.classList.add('scrolling');
    } else {
        productBodyScroll.classList.remove('scrolling');
    }
}
// productda tip button lar uchun  amallar
const tip_buttons_label = document.querySelectorAll('.tip_buttons_label');
tip_buttons_label.forEach(element => {
    element.addEventListener('click', () => {
        tip_buttons_label.forEach(e => {
            e.classList.remove('clicked');
        });
        element.classList.add('clicked');
    });
});
    // product da minicardlar uchun amallar
const minicard_product = document.querySelectorAll('.minicard_product');
minicard_product.forEach(element => {
    element.addEventListener('click', () => {
        let k = true;
        element.classList.forEach(e => {
            if (e == 'disabled') {
                k= false;
            }
        });
        if (k) {
            element.classList.toggle('checked');
        }
    });
});
    // tip size buttonlar uchun action amallar
const tip_size_buttons = document.querySelectorAll('.tip_size_buttons');
tip_size_buttons.forEach(element => {
    element.addEventListener('click', () => {
        tip_size_buttons.forEach(e => {
            e.classList.remove('clicked');
        });
        element.classList.add('clicked');
    });
});


// Korzinka actions

const korzinkaBody = document.getElementById('korzinkaBody');
const korzinkaButton = document.getElementById('korzinkaButton');
const korzinkaIn = document.getElementById('korzinkaIn');
const korzinkaInFixed = document.getElementById('korzinkaInFixed');

const korzinkaOn = () => {
    korzinkaBody.classList.remove('off');
}
const korzinkaOff = () => {
    korzinkaBody.classList.add('off');
}
const korzinkaOnToggle = () => {
    actionOn();
    korzinkaOn();
}
const korzinkaOffToggle = () => {
    actionOff();
    korzinkaOff();
}
korzinkaIn.addEventListener('click', korzinkaOnToggle);
korzinkaInFixed.addEventListener('click', korzinkaOnToggle);
korzinkaButton.addEventListener('click', korzinkaOffToggle);


