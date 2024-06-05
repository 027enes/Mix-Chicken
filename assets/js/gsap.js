/*Page About-Us*/
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Resimler için animasyon (sağdan sola)
    gsap.from(".about-us-image", {
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
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
            toggleActions: "play none none reverse",
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

/*Products*/
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
    // Split animasyon için about-us-title
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

/*promo-deal*/

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

/*News*/
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
    // Split animasyon için news-title-animation
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

/*Footer*/
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