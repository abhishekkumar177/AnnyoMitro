document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add a class to the header on scroll for styling
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animate elements on scroll using Intersection Observer
    const animateOnScroll = (elements, observerOptions) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(el => observer.observe(el));
    };

    // Apply fade-in effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    animateOnScroll(featureCards, { threshold: 0.3 });

    // Apply fade-in effect to gallery images
    const galleryImages = document.querySelectorAll('.image-gallery img');
    galleryImages.forEach((img, index) => {
        img.style.transitionDelay = `${index * 0.05}s`;
    });
    animateOnScroll(galleryImages, { threshold: 0.2 });

    // GSAP animation for nav bar links on hover
    const navLinks = document.querySelectorAll('.nav-menu a');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            gsap.to(link, {
                color: randomColor,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                color: '#666',
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    });

    // New GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Section Animation (on page load)
    gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });
    gsap.from(".cta-buttons a", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        delay: 1,
        ease: "power2.out"
    });

    // 2. Animate "Features" section elements on scroll
    gsap.from(".features-section .tag, .features-section h2, .features-section .subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // 3. Animate new "Process" section
    gsap.from(".process-section h2, .process-section .subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".process-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    gsap.from(".process-card", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".process-card",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // 4. Animate "Impact Stats" section
    gsap.from(".impact-stats-section h2, .impact-stats-section .subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".impact-stats-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    gsap.from(".impact-metric-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".impact-metric-card",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // 5. Animate "About" section
    gsap.from(".about-section h2, .about-section .subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    gsap.from(".about-card", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".about-card",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // 6. Animate "Final CTA" section
    gsap.from(".cta-banner h2, .cta-banner p, .cta-banner a, .cta-features", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".cta-banner",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});