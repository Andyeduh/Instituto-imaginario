// MENU HAMBÚRGUER
const menuBtn = document.querySelector('.menu-icon');
const nav = document.getElementById('navMenu');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => nav.classList.add('active'));
closeBtn.addEventListener('click', () => nav.classList.remove('active'));

// BANNER ROTATIVO
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

setInterval(nextSlide, 6000);