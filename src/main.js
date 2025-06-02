const carousel = document.getElementById('carousel');
const items = carousel.children;
const itemHeight = items[0].offsetHeight;
let index = 0;

setInterval(() => {
  index = (index + 1) % items.length;
  carousel.style.transform = 'translateY(-${index * itemHeight}px)';
}, 2000);
