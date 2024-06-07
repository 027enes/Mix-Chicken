document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".certificatesSwiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    var swiper = new Swiper(".newsSlider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    var productSwiper = new Swiper('.productCategory', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });


    var productTabsSwiper = new Swiper('.productTabs', {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
    });
    var swiper = new Swiper(".homeCategory", {
        slidesPerView: 2,
        spaceBetween: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            1223: {
                slidesPerView: 4,
            },
            1224: {
                slidesPerView: 5,
            },
        },
    });


    var swiper = new Swiper('.homeSlider', {
        loop: true,
        effect: "fade",

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                var activeSlide = document.querySelector('.swiper-slide-active');
                gsap.set(activeSlide.querySelectorAll('.swiper-title, .swiper-description, .swiper-button'), {
                    opacity: 0,
                    y: 20
                });
                gsap.to(activeSlide.querySelectorAll('.swiper-title, .swiper-description, .swiper-button'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.3,
                    delay: 0.3
                });
            },
            slideChangeTransitionStart: function () {
                var previousSlide = document.querySelector('.swiper-slide-active');
                if (previousSlide) {
                    gsap.to(previousSlide.querySelectorAll('.swiper-title, .swiper-description, .swiper-button'), {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        stagger: 0.1
                    });
                }
            },
            slideChangeTransitionEnd: function () {
                var activeSlide = document.querySelector('.swiper-slide-active');
                if (activeSlide) {
                    gsap.fromTo(activeSlide.querySelectorAll('.swiper-title, .swiper-description, .swiper-button'), {
                        opacity: 0,
                        y: 20
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.3,
                        delay: 0.3
                    });
                }
            }
        }
    });

// Initialize the swiper to trigger the init event
    swiper.init();

});