const video = document.getElementById("myVideo");
const carousel = document.getElementById("carouselExampleIndicators");


carousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = document.querySelector('.carousel-item.active');

    if (activeItem.contains(video)) {
    video.play();  
    } else {
    video.pause(); 
    }
});


window.addEventListener("scroll", function() {
    const videoRect = video.getBoundingClientRect();

    if (videoRect.top >= 0 && videoRect.bottom <= window.innerHeight) {
    
    video.play();
    } else {
    
    video.pause();
    }
});