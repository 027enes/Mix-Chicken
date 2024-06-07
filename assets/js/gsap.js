// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline({ defaults: { duration: 1 } });

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
        timeline.from(".about-us-img-one img", {
            y: 200,
            opacity: 0,
            duration: 1
        });

        timeline.from(".about-us-img-two img", {
            y: 200,
            opacity: 0,
            duration: 1
        }, "-=0.5");
    } else {
        timeline.from(".about-us-img-one img", {
            x: -200,
            opacity: 0,
            duration: 1
        });

        timeline.from(".about-us-img-two img", {
            x: 200,
            opacity: 0,
            duration: 1
        }, "-=0.5");
    }

    timeline.from(".about-us-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        onStart: () => {
            gsap.set(".about-us-subtitle", {
                text: {
                    value: "Hakkımızda",
                    newClass: "split-text"
                }
            });
        }
    });

    timeline.from(".about-us-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        onStart: () => {
            gsap.set(".about-us-title", {
                text: {
                    value: "Mix Chicken Hakkında",
                    newClass: "split-text"
                }
            });
        }
    }, "-=0.5");

    timeline.from(".about-us-description", {
        y: 50,
        opacity: 0,
        duration: 1
    }, "-=0.5");

    timeline.from(".about-us-button", {
        scale: 0,
        opacity: 0,
        duration: 0.5
    }, "-=0.5");

    timeline.to({}, { duration: 0, repeat: 0 });
});


document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const title = document.querySelector(".coming-soon-title");
    const chars = title.textContent.split("").map(char => `<span>${char}</span>`).join("");
    title.innerHTML = chars;

    gsap.from(title.querySelectorAll("span"), {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".coming-soon-title",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.05 // Her harf arası animasyon gecikmesi
    });

    gsap.from(".subeler-card", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".subeler-card",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        }
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


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({ defaults: { duration: 1 } });

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
        timeline.from(".mission-vision-images img", {
            y: 200,
            opacity: 0,
            duration: 1
        });

        timeline.from(".mission-vision-title", {
            y: 50,
            opacity: 0,
            duration: 1
        }, "-=0.5");

        timeline.from(".accordion-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1
        }, "-=0.5");
    } else {
        timeline.from(".mission-vision-images img", {
            x: 200,
            opacity: 0,
            duration: 1
        });

        timeline.from(".mission-vision-title", {
            y: 50,
            opacity: 0,
            duration: 1
        }, "-=0.5");

        timeline.from(".accordion-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1
        }, "-=0.5");
    }

    timeline.to({}, { duration: 0, repeat: 0 });
});



document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const title = document.querySelector(".certificates-title");
    const chars = title.textContent.split("").map(char => `<span>${char}</span>`).join("");
    title.innerHTML = chars;

    gsap.from(title.querySelectorAll("span"), {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".certificates-title",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.05 // Her harf arası animasyon gecikmesi
    });

    if (isMobile) {
        gsap.from(".swiper-slide img", {
            y: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".certificatesSwiper",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none",
            }
        });
    } else {
        gsap.from(".swiper-slide img", {
            x: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".certificatesSwiper",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none",
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const title = document.querySelector(".kalite-politikalari-title");
    const chars = title.textContent.split("").map(char => `<span>${char}</span>`).join("");
    title.innerHTML = chars;

    gsap.from(title.querySelectorAll("span"), {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".kalite-politikalari-title",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
        },
        stagger: 0.05 // Her harf arası animasyon gecikmesi
    });

    gsap.from(".kalite-politikalari-desc", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".kalite-politikalari-desc",
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
                    toggleActions: "play none none none",
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
