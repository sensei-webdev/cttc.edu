// const hamburger = document.getElementById('hamburger');
// const mobileview = document.getElementById('mobileNav');
// const overlayer = document.getElementById('layer');
// const mobileLinks = document.querySelectorAll('#mobileNav a');
// const openedHam = document.getElementById('opened-ham');

// const toggleMenu = () => {
//     mobileview.classList.toggle('hidden');
//     overlayer.classList.toggle('hidden');
// }

// hamburger.addEventListener('click', toggleMenu);
// overlayer.addEventListener('click', toggleMenu);
// openedHam.addEventListener('click', toggleMenu);
// mobileLinks.forEach(link => {
//     link.addEventListener('click', toggleMenu);
// });
// overlayer.addEventListener('touchStart', toggleMenu);
// overlayer.addEventListener('mousedown', toggleMenu);

// let startY = 0;

// overlayer.addEventListener('touchstart', (e) => {
//     startY = e.touches[0].clientY;
// });

// overlayer.addEventListener('touchend', (e) => {
//     let endY = e.changedTouches[0].clientY;
//     if (startY > endY + 30) {
//         // Swipe up
//         toggleMenu();
//     }
// });


const hamburger = document.getElementById('hamburger');
const mobileview = document.getElementById('mobileNav');
const overlayer = document.getElementById('layer');
const mobileLinks = document.querySelectorAll('#mobileNav a');
const openedHam = document.getElementById('opened-ham');

const toggleMenu = () => {
    mobileview.classList.toggle('hidden');
    overlayer.classList.toggle('hidden');
};

// Utility to check if overlay is visible
const isOverlayVisible = () => {
    return window.getComputedStyle(overlayer).display !== 'none';
};

// Toggle menu on various clicks
hamburger.addEventListener('click', toggleMenu);
overlayer.addEventListener('click', toggleMenu);
openedHam.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Touch and mouse press events
overlayer.addEventListener('touchstart', (e) => {
    if (isOverlayVisible()) startY = e.touches[0].clientY;
});

overlayer.addEventListener('mousedown', (e) => {
    if (isOverlayVisible()) toggleMenu();
});

overlayer.addEventListener('touchstart', toggleMenu); // For normal touch-to-close

let startY = 0;

overlayer.addEventListener('touchend', (e) => {
    if (!isOverlayVisible()) return;

    const endY = e.changedTouches[0].clientY;
    if (startY > endY + 30) {
        // Swipe up detected
        toggleMenu();
    }
});

const section1 = document.getElementById('hero');
const section2 = document.getElementById('feature');
const backgroundLayer = document.getElementById('backgroundLayer');

const totalHeight = section1.offsetHeight + section2.offsetHeight - 150;
backgroundLayer.style.height = totalHeight + 'px';

// = = = = = = = = = = = = = = Floating Animation Code = = = = = = = = = = = = = =

document.querySelectorAll('backgroundLayer images').style

// = = = = = = = = = = = = = = Floating Animation Code = = = = = = = = = = = = = =
const logos = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    'https://raw.githubusercontent.com/AbuBakar5173/imagesDataBase/2cbcf32b5248270690a9c0a721bcf2fef882878f/excelimage.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
];

const container = document.getElementById('backgroundLayer');
const logosData = [];

function init() {
    logos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('floating-logo');

        const size = 30;
        img.style.width = size + 'px';

        const x = Math.random() * (window.innerWidth - size);
        const y = Math.random() * (window.innerHeight - size);
        const vx = (Math.random() * 0.2 + 0.1) * (Math.random() < 0.5 ? -1 : 1);
        const vy = (Math.random() * 0.2 + 0.1) * (Math.random() < 0.5 ? -1 : 1);

        container.appendChild(img);

        logosData.push({ img, x, y, vx, vy, size });
    });

    requestAnimationFrame(update);
}

function update() {
    for (const logo of logosData) {
        logo.x += logo.vx;
        logo.y += logo.vy;

        if (logo.x <= 0 || logo.x + logo.size >= window.innerWidth) {
            logo.vx *= -1;
        }
        if (logo.y <= 0 || logo.y + logo.size >= window.innerHeight) {
            logo.vy *= -1;
        }

        logo.img.style.transform = `translate(${logo.x}px, ${logo.y}px)`;
    }

    requestAnimationFrame(update);
}

window.addEventListener('DOMContentLoaded', init);

const icons = document.querySelectorAll('i');

icons.classList.add('cursor-pointer');