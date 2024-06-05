document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Cihaz genişliğini kontrol etmek için yardımcı fonksiyon
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Resimler için animasyon
    gsap.from(".about-us-image", {
        duration: 1.5,
        x: isMobile() ? 0 : 100,
        y: isMobile() ? 100 : 0,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        }
    });

    // Metinler için animasyon (aşağıdan yukarıya)
    gsap.from(".about-us-content, .about-us-list, .about-us-desc", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.3 // Animasyonları arka arkaya oynatır
    });

    // Split animasyon için about-us-title
    const title = document.querySelector(".about-us-title");
    const chars = title.textContent.split("").map(char => `<span>${char}</span>`).join("");
    title.innerHTML = chars;

    gsap.from(title.querySelectorAll("span"), {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.05 // Her harf arası animasyon gecikmesi
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".productCategory", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".productCategory",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        }
    });

    gsap.from(".products-tabs", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".products-tabs",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        }
    });

    const title = document.querySelector(".products-title");
    const chars = title.textContent.split("").map(char => `<span>${char}</span>`).join("");
    title.innerHTML = chars;

    gsap.from(title.querySelectorAll("span"), {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".products-animation",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.05 // Her harf arası animasyon gecikmesi
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Split animasyon için promo-deal-animation
    const title = document.querySelector(".promo-deal-animation");
    const mixChickenTitle = title.querySelector(".mix-chicken-title");

    // "Mix Chicken" kısmını ayır ve bir değişkene kaydet
    const mixChickenHTML = mixChickenTitle.outerHTML;

    // "Mix Chicken" kısmını metinden çıkar
    const textBefore = title.innerHTML.split(mixChickenHTML)[0];
    const textAfter = title.innerHTML.split(mixChickenHTML)[1];

    // Karakterleri sarma fonksiyonu
    function wrapChars(text) {
        return text.split("").map(char => `<span class="char">${char}</span>`).join("");
    }

    // "Mix Chicken" kısmını da parçala
    const mixChickenChars = mixChickenTitle.textContent.split("").map(char => `<span class="mix-chicken-char">${char}</span>`).join("");

    // Yeni içeriği oluştur
    title.innerHTML = wrapChars(textBefore) + `<span class="mix-chicken-title">${mixChickenChars}</span>` + wrapChars(textAfter);

    // GSAP animasyonu
    gsap.from(title.querySelectorAll("span"), {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".promo-deal-animation",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            once: true
        },
        stagger: 0.05 // Her harf arası animasyon gecikmesi
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".newsSlider", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".newsSlider",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        }
    });

    const title = document.querySelector(".news-title-animation");
    const chars = title.textContent.split("").map(char => `<span>${char}</span>`).join("");
    title.innerHTML = chars;

    gsap.from(title.querySelectorAll("span"), {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".news-title-animation",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.05 // Her harf arası animasyon gecikmesi
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".footer", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const titles = document.querySelectorAll(".about-us-services-title-animation");
    titles.forEach(title => {
        const words = title.textContent.split(" ").map(word => `<span>${word}</span>`).join(" ");
        title.innerHTML = words;

        gsap.fromTo(title.querySelectorAll("span"),
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                },
                stagger: 0.2 // Her kelime arası animasyon gecikmesi
            }
        );
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-us-services-animation", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".about-us-services-animation",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        }
    });
});

/*Contact*/

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const titles = document.querySelectorAll(".contact-form-title-animation");
    titles.forEach(title => {
        const chars = title.textContent.split("").map(char => `<span>${char}</span>`).join("");
        title.innerHTML = chars;

        gsap.fromTo(title.querySelectorAll("span"),
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                },
                stagger: 0.05 // Her harf arası animasyon gecikmesi
            }
        );
    });
});
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".contact-item", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".contacts",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.2 // Her öğe arası animasyon gecikmesi
    });
});


/*News Page*/
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".news-items", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".news-page",
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.08 // Her öğe arası animasyon gecikmesi
    });
});
