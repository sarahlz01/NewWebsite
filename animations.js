// Animation utilities and functions

// Fade in animation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements with fade-in effect
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Smooth scroll animation
function smoothScrollTo(element) {
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with data-scroll-animate attribute
document.addEventListener('DOMContentLoaded', function() {
    const scrollAnimateElements = document.querySelectorAll('[data-scroll-animate]');
    scrollAnimateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Add fade-in class animation
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Hover animation helper
function addHoverAnimation(selector, scale = 1.05) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.transition = 'transform 0.3s ease';
        element.addEventListener('mouseenter', () => {
            element.style.transform = `scale(${scale})`;
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });
}

// Export functions for use
window.animations = {
    smoothScrollTo,
    addHoverAnimation
};

