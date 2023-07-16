var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide_show");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500);
}



const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
    modalImage.alt = image.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});