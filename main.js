// main.js

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sticky Header dengan Efek Glass Blur
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header--scrolled");
        } else {
            header.classList.remove("header--scrolled");
        }
    });

    // 2. Animasi Scroll Reveal (Fade Up)
    const sections = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1 // 10% elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Stop mengamati setelah animasi
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 3. FAQ Accordion
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq__question");
        
        question.addEventListener("click", () => {
            // Cek apakah sudah aktif
            const isActive = item.classList.contains("active");

            // Optional: Tutup semua item lain
            // faqItems.forEach(otherItem => {
            //     otherItem.classList.remove("active");
            // });

            // Toggle item yang diklik
            if (isActive) {
                item.classList.remove("active");
            } else {
                item.classList.add("active");
            }
        });
    });
    
    // 4. Update Tahun di Copyright Footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});