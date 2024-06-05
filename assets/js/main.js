const hamburgerBtn = document.getElementById('hamburgerBtn');
const navigation = document.getElementById('navigation');
hamburgerBtn.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

const searchBtn = document.getElementById('searchBtn');
const searchContent = document.getElementById('search-content');
const closeBtn = document.getElementById('closeBtn');
searchBtn.addEventListener('click', () => {
    if (searchContent.classList.contains('active')) {
        searchContent.classList.remove('active');
    } else {
        searchContent.classList.add('active');
    }
});
closeBtn.addEventListener('click', () => {
    searchContent.classList.remove('active');
});


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.HomeSlider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionEnd: function () {
                // Get all slides
                var slides = this.slides;

                // Remove animation classes from all slides
                slides.forEach(function (slide) {
                    var content = slide.querySelector('.swiper-slide-content');
                    var doner = slide.querySelector('.doner-animation');
                    if (content) content.classList.remove('animate-content');
                    if (doner) doner.classList.remove('animate-doner');
                });

                // Trigger reflow by accessing offsetWidth and reapply animation classes with a delay
                setTimeout(function() {
                    var activeSlide = slides[swiper.activeIndex];
                    var content = activeSlide.querySelector('.swiper-slide-content');
                    var doner = activeSlide.querySelector('.doner-animation');
                    if (content) content.classList.add('animate-content');
                    if (doner) doner.classList.add('animate-doner');
                }, 50); // Delay to ensure reflow
            },
        },
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const homeSlider = document.querySelector('.home-slider');
    const icons = document.querySelectorAll('.swiper-icon img');

    homeSlider.addEventListener('mousemove', (event) => {
        const rect = homeSlider.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // İkonların ters yönde hareket etmesi için çevirim katsayısını negatif yapıyoruz
        const moveX = (rect.width / 2 - mouseX) / 20;
        const moveY = (rect.height / 2 - mouseY) / 20;

        icons.forEach(icon => {
            icon.style.transition = 'none'; // Fare hareket ederken geçişi kapat
            icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    homeSlider.addEventListener('mouseleave', () => {
        icons.forEach(icon => {
            icon.style.transition = 'transform 0.5s ease-in-out'; // Fare alan dışına çıkınca geçişi aç
            icon.style.transform = 'translate(0, 0)';
        });
    });
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

// Tab menüdeki linklere tıklama olayları
document.querySelectorAll('.productTabs .swiper-slide a').forEach(function(tab) {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.productTabs .swiper-slide a').forEach(function(link) {
            link.classList.remove('active');
        });
        tab.classList.add('active');

        // Seçilen kategoriye göre slaytları filtrele
        var category = tab.getAttribute('data-category');
        filterSlides(category);
    });
});

function filterSlides(category) {
    document.querySelectorAll('.productCategory .swiper-slide').forEach(function(slide) {
        if (category === 'all' || slide.getAttribute('data-category') === category) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });

    // Slaytları güncelle
    productSwiper.update();
}

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