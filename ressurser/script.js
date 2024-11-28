
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) { 
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});


const sliderTrack = document.querySelector('.slider-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;

function updateSliderPosition() {
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2; 
  updateSliderPosition();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0; 
  updateSliderPosition();
});


const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    
    window.location.href = `product.html?id=${index + 1}`;
  });
});


if (window.location.pathname.includes('product.html')) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {

    const mockProducts = [
      {
        name: "Product Name 1",
        price: "Kr 1999",
        description: "Description for Product 1",
        image: "img/product1.jpg"
      },
      {
        name: "Product Name 2",
        price: "Kr 1499",
        description: "Description for Product 2",
        image: "img/product2.jpg"
      },
    ];

    const product = mockProducts[productId - 1];

    if (product) {
      document.querySelector('.product-title').textContent = product.name;
      document.querySelector('.product-price').textContent = product.price;
      document.querySelector('.product-description').textContent = product.description;
      document.querySelector('.product-image').src = product.image;
    } else {
      console.error("Product not found");
    }
  }
}
