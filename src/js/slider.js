let images = [
    {
        url: require("../images/banner1.jpg")
    }, 
    {
        url: require("../images/banner2.jpg")
    }, 
    {
        url: require("../images/banner3.jpg")
    }
];


function initslider(options) {
    if (!images || !images.length) return;

    options = options || {
        dots: true,
        titles: false
    };

    let sliderImages = document.querySelector(".slider__images");
    let sliderDots = document.querySelector(".slider__dots");

    initImages();

    if (options.dots) {
        initDots();
    }

    if (options.autoplay) {
        initAutoplay();
    }

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function () {
                moveSlider(this.dataset.index);
                sliderDots.querySelector(".active").classList.remove("active");
                this.classList.add("active");
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");

        if (options.dots) {
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n" + num).classList.add("active");
        }
    }

    function initAutoplay() {
        setInterval(() => {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          moveSlider(nextNumber);
        }, options.autoplayInterval);
    }
}

let sliderOptoins = {
    dots: true,
    titles: true,
    autoplay: true,
    autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function () {
    initslider(sliderOptoins);
})