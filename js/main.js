
// Shrink Navigation Menu
const getElement = (selector) => {
    return document.querySelector(selector);
}

window.onscroll = () => { scrollHeader() };

const scrollHeader = () => {
    if (document.documentElement.scrollTop >= 80) {
        getElement("#site-header").classList = "header nav-fixed";
    } else {
        getElement("#site-header").classList = "header";
    }

    // if (document.documentElement.scrollTop > 700) {
    //     getElement(".backToTop").classList = "backToTop active";
    // } else {
    //     getElement(".backToTop").classList = "backToTop";
    // }
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

//BACK TO TOP
document.getElementById("movetop").addEventListener("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 100);
});

// Toggle Header
// getElement(".header__navbar").addEventListener("click", () => {
//     const headerMenu = getElement(".header__menu");
//     if (headerMenu.classList == "header__menu hide") {
//         headerMenu.classList = "header__menu show";
//     } else {
//         headerMenu.classList = "header__menu hide";
//     }
//     const headerLogo = getElement(".header__logo");
//     if (headerLogo.classList == "header__logo hide") {
//         headerLogo.classList = "header__logo show";
//     } else {
//         headerLogo.classList = "header__logo hide";
//     }
//     const headerNav = getElement(".header__navbar");
//     if (headerNav.classList == "header__navbar hide") {
//         headerNav.classList = "header__navbar show";
//     } else {
//         headerNav.classList = "header__navbar hide";
//     }
// })
