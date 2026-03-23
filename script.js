// DOM Elements
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const scrollProgress = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('#backToTop');
const contactForm = document.querySelector('#contactForm');
const revealElements = document.querySelectorAll('.reveal');
const skillProgress = document.querySelectorAll('.skill-progress');

// Typing Animation
const dynamicText = document.querySelector('.dynamic-text');
const phrases = [
    'Securing Digital Infrastructure',
    'Building Cloud Solutions',
    'Protecting Against Cyber Threats',
    'Implementing DevSecOps',
    'Exploring Blockchain Security'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
}

// Custom Cursor - Disabled
function initCustomCursor() {
    // Custom cursor functionality removed
}

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll Progress Bar
function updateScrollProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

// Navbar Scroll Effect
function updateNavbar() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Back to Top Button
function updateBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });

    // Animate skill progress bars when visible
    skillProgress.forEach(progress => {
        const elementTop = progress.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100 && !progress.style.width) {
            const level = progress.getAttribute('data-level');
            progress.style.width = level + '%';
        }
    });
}

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Validation and Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Reset previous error states
    clearFormErrors();
    
    let isValid = true;
    
    // Validate name
    if (name.length < 2) {
        showFormError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate message
    if (message.length < 10) {
        showFormError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    if (isValid) {
        // Send email using Formspree
        sendEmailWithFormspree(name, email, message);
    }
});

async function sendEmailWithFormspree(name, email, message) {
    const formData = {
        name: name,
        email: email,
        message: message,
        _subject: `Portfolio Contact from ${name}`,
        _replyto: 'gauravz.me0@gmail.com'
    };

    try {
        const response = await fetch('https://formspree.io/f/meerwwng', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            showFormSuccess();
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error sending form:', error);
        showFormError('message', 'Failed to send message. Please try again later.');
    }
}

function showFormError(fieldName, message) {
    const field = document.querySelector(`#${fieldName}`);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ff4444';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#ff4444';
}

function clearFormErrors() {
    const errorMessages = document.querySelectorAll('.form-error');
    errorMessages.forEach(error => error.remove());
    
    const fields = document.querySelectorAll('.form-group input, .form-group textarea');
    fields.forEach(field => {
        field.style.borderColor = '';
    });
}

function showFormSuccess() {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.textContent = 'Message sent successfully! I\'ll get back to you at gauravz.me0@gmail.com.';
    successDiv.style.cssText = `
        background: linear-gradient(135deg, #00ff88, #00d4ff);
        color: #0a0a0f;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        font-weight: 600;
        animation: fadeInUp 0.5s ease;
    `;
    
    contactForm.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Parallax Effect for Hero Background
function parallaxEffect() {
    const heroBg = document.querySelector('.hero-bg');
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${parallax}px)`;
    }
}

// Intersection Observer for Advanced Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Add stagger animation for skill cards
                if (entry.target.classList.contains('skills-grid')) {
                    const skillCards = entry.target.querySelectorAll('.skill-card');
                    skillCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.animation = `fadeInUp 0.6s ease forwards`;
                        }, index * 100);
                    });
                }
                
                // Add stagger animation for project cards
                if (entry.target.classList.contains('projects-grid')) {
                    const projectCards = entry.target.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.animation = `fadeInUp 0.6s ease forwards`;
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Add CSS animation keyframes dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .form-error {
            animation: shake 0.5s ease;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        
        .skill-card,
        .project-card {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .timeline-item {
            opacity: 0;
            transform: translateX(-30px);
        }
        
        .timeline-item:nth-child(even) {
            transform: translateX(30px);
        }
        
        .timeline-item.reveal.active {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.8s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    if (dynamicText) {
        typeWriter();
    }
    
    // Initialize intersection observer
    initIntersectionObserver();
    
    // Add animation styles
    addAnimationStyles();
    
    // Initial scroll reveal
    revealOnScroll();
    
    // Update navbar and other scroll-based elements
    updateNavbar();
    updateScrollProgress();
    updateActiveNavLink();
    updateBackToTop();
});

// Scroll event listeners
window.addEventListener('scroll', () => {
    updateNavbar();
    updateScrollProgress();
    updateActiveNavLink();
    updateBackToTop();
    revealOnScroll();
    parallaxEffect();
});

// Window resize event listener
window.addEventListener('resize', () => {
    // Custom cursor functionality removed
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Prevent context menu on images (optional)
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScrollHandler = debounce(() => {
    updateNavbar();
    updateScrollProgress();
    updateActiveNavLink();
    updateBackToTop();
    revealOnScroll();
    parallaxEffect();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndY < touchStartY - 50) {
        // Swipe up - could be used for navigation
        console.log('Swiped up');
    }
    if (touchEndY > touchStartY + 50) {
        // Swipe down - could be used for navigation
        console.log('Swiped down');
    }
}

// Console Easter egg
console.log('%c🚀 Welcome to Gaurav Gautam\'s Portfolio!', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cBuilt with passion for cybersecurity and cloud computing', 'font-size: 14px; color: #ff00ff;');
console.log('%cFeel free to explore the code!', 'font-size: 12px; color: #00ff88;');
