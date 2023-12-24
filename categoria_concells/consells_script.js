window.onload = function(){
    let carousel = document.querySelector('.carousel');
    let slides = document.querySelectorAll('.carousel-slide');
    let prevBtn = document.querySelector('.arrow.prev');
    let nextBtn = document.querySelector('.arrow.next');

    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }

        slides[slideIndex].style.display = 'block';
    }

    showSlide(slideIndex);

    prevBtn.addEventListener('click', () => {
        showSlide(--slideIndex);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(++slideIndex);
    });
}