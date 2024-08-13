let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images-tips img');
    const totalSlides = slides.length;
    
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images-tips').style.transform = `translateX(${offset}%)`;
}

// Avanza automáticamente cada 3 segundos
setInterval(() => moveSlide(1), 3000); // Cambia de imagen cada 3 segundos
