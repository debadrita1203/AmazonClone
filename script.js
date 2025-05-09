const images = document.querySelectorAll('.header-img');
const prevBtn = document.getElementById('prevbtn');
const nextBtn = document.getElementById('nextbtn');
let currentIndex = 0;
let intervalTime = 5000;

// Show image by index
function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

// Initial image display
showImage(currentIndex);

// Manual navigation
prevBtn.addEventListener('click', function (e) {
  e.preventDefault();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  resetAutoSlide();
});

nextBtn.addEventListener('click', function (e) {
  e.preventDefault();
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  resetAutoSlide();
});

// Auto slide every few seconds
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, intervalTime);

// Reset the auto slide timer on manual interaction
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, intervalTime);
}


const productList = document.getElementById('productList');
const nextB = document.getElementById('next');
const prevB = document.getElementById('prev');

nextB.addEventListener('click', function (e) {
  productList.scrollBy({ left: 300, behavior: 'smooth' });
});

prevB.addEventListener('click', function (e) {
  productList.scrollBy({ left: -300, behavior: 'smooth' });
});
