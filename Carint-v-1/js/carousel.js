// $(document).ready(function () {
//     var currentIndex = 0;
//     var slides = $('.carousel-slide');
//     var slideCount = slides.length;

//     function showSlide(index) {
//         slides.hide();
//         slides.eq(index).show();
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % slideCount;
//         showSlide(currentIndex);
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//         showSlide(currentIndex);
//     }

//     // Show the initial slide
//     showSlide(currentIndex);

//     // Add click event handlers for next and previous buttons
//     $('#next').click(nextSlide);
//     $('#prev').click(prevSlide);
// });

// script.js
$(document).ready(function () {
    var $carousel = $('.carousel');
    var slideWidth = $('.carousel-slide').width();
    var currentSlide = 0;
    var totalSlides = $('.carousel-slide').length;

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    // Function to update the carousel to the current slide
    function updateCarousel() {
        var translateX = -currentSlide * slideWidth;
        $carousel.css('transform', 'translateX(' + translateX + 'px)');
    }

    // Auto-play the carousel
    var autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Pause auto-play on hover
    $carousel.hover(
        function () {
            clearInterval(autoPlayInterval);
        },
        function () {
            autoPlayInterval = setInterval(nextSlide, 3000);
        }
    );
});
