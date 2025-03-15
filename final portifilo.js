var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
        invert: false,
    },
});

document.getElementById("resume-download-btn").addEventListener("click", function() {
    const resumeUrl = "https://1drv.ms/w/c/d1f5ab2a6b86f987/ESVi_x_OsjBJs2OpcnFyFoEBZNk6M2x7mikj6RxMNw-59g?e=gNGLHZ";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Kollepara_Chakravarthi_Resume.pdf"; // Rename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});






function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function Impressed() {
    window.open("");

};

function playVideo() {
    window.open("https://portal.ccbp.in/nxtwave-2024-wrap?uid=8b0d8b16-0150-4157-9301-81e7a872b498", "_blank");
}

function python() {
    window.open("https://certificates.ccbp.in/academy/programming-foundations-with-python?id=OBNQJNZXEL");
}

function Frontend() {
    window.open("https://certificates.ccbp.in/academy/static-website?id=SNUZSAHYMK");
}

function Marketing() {
    window.open("https://i.imgur.com/NCcGDyy.jpeg");
}

function ui() {
    window.open("https://i.imgur.com/Ob2ud7m.jpeg");
};

function ml() {
    window.open("https://www.linkedin.com/posts/kollepara-venkata-sri-chakravarthi-506892286_machinelearning-kaggle-datascience-activity-7255931103713087489-P4BJ?utm_source=share&utm_medium=member_android");
};