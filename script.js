// Mobile Navigation Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// array of images
const images = [
  'img/homeimage.jpg',    // index 0 --> images[0]
  'img/leatherfactory.jpg',    // index 1 --> images[1]
  'img/cuttingleather.jpg',    // index 2 --> images[2]
  'img/leathercase.jpg',    // index 3 --> images[3]
  'img/leathercase2.jpg'     // index 4 --> images[4]
];
const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{

      // get image tag
      const imageTag = document.getElementById('image');
      currentImage++; // 1
      if(currentImage >= lastImage){
          currentImage = 4;
      }
      imageTag.src = images[currentImage];
      document.getElementById('info').innerHTML = (currentImage +1) + '/5';

});
// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click', ()=>{

  // get image tag
  const imageTag = document.getElementById('image');
  currentImage--; // 1
  if(currentImage <= firstImage){
      currentImage = 0;
  }
  imageTag.src = images[currentImage];
  document.getElementById('info').innerHTML = (currentImage +1) + '/5';

});

// Update footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();
  
// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message. We will get back to you soon!');
  this.reset();
});
// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
 document.querySelector('.nav-links').classList.toggle('active');
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
