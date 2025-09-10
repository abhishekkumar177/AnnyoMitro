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

});