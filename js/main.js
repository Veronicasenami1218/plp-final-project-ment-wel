// ===== MAIN JAVASCRIPT FILE =====

// DOM Elements
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const demoBtn = document.getElementById('demo-btn');

// ===== HEADER SCROLL EFFECT =====
function handleHeaderScroll() {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ===== MOBILE NAVIGATION =====
function toggleMobileMenu() {
    navMenu.classList.toggle('show-menu');
    
    // Toggle hamburger animation
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
}

// ===== SMOOTH SCROLLING =====
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = header.offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// ===== ACTIVE NAVIGATION LINK =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - header.offsetHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
}

// ===== ANIMATION ON SCROLL =====
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('aos-animate');
        }
    });
}

// ===== DEMO MODAL =====
function showDemoModal() {
    // Create modal HTML
    const modalHTML = `
        <div class="modal" id="demo-modal">
            <div class="modal__content">
                <div class="modal__header">
                    <h3>MentWel Demo</h3>
                    <button class="modal__close" id="modal-close">&times;</button>
                </div>
                <div class="modal__body">
                    <div class="demo__video">
                        <div class="demo__placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5,3 19,12 5,21"/>
                            </svg>
                            <p>Demo video will be available soon</p>
                        </div>
                    </div>
                    <div class="demo__description">
                        <h4>See MentWel in Action</h4>
                        <p>Watch how easy it is to connect with therapists, book sessions, and track your mental wellness journey.</p>
                        <ul>
                            <li>Simple registration process</li>
                            <li>Easy therapist discovery</li>
                            <li>Seamless session booking</li>
                            <li>Progress tracking features</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = document.getElementById('demo-modal');
    modal.classList.add('show');
    
    // Close modal functionality
    const closeBtn = document.getElementById('modal-close');
    closeBtn.addEventListener('click', closeDemoModal);
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDemoModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDemoModal();
        }
    });
}

function closeDemoModal() {
    const modal = document.getElementById('demo-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// ===== FORM VALIDATION =====
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showInputError(input, 'This field is required');
            isValid = false;
        } else {
            clearInputError(input);
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                showInputError(input, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
            if (!phoneRegex.test(input.value)) {
                showInputError(input, 'Please enter a valid phone number');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function showInputError(input, message) {
    clearInputError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'input-error';
    errorDiv.textContent = message;
    
    input.classList.add('error');
    input.parentNode.appendChild(errorDiv);
}

function clearInputError(input) {
    input.classList.remove('error');
    const errorDiv = input.parentNode.querySelector('.input-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
        <div class="toast__content">
            <span class="toast__message">${message}</span>
            <button class="toast__close">&times;</button>
        </div>
    `;
    
    // Add toast to body
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideToast(toast);
    }, 5000);
    
    // Close button functionality
    const closeBtn = toast.querySelector('.toast__close');
    closeBtn.addEventListener('click', () => hideToast(toast));
}

function hideToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
        toast.remove();
    }, 300);
}

// ===== LAZY LOADING =====
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== SCROLL TO TOP =====
function createScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 15l-6-6-6 6"/>
        </svg>
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== THEME TOGGLE =====
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
        <svg class="theme-toggle__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
        <svg class="theme-toggle__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    `;
    
    // Add to header
    const navAuth = document.querySelector('.nav__auth');
    if (navAuth) {
        navAuth.appendChild(themeToggle);
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
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

// Debounced scroll handlers
const debouncedScrollHandler = debounce(() => {
    handleHeaderScroll();
    updateActiveNavLink();
    animateOnScroll();
}, 10);

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // Create scroll to top button
    createScrollToTop();
    
    // Create theme toggle
    createThemeToggle();
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Add event listeners
    window.addEventListener('scroll', debouncedScrollHandler);
    
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (demoBtn) {
        demoBtn.addEventListener('click', showDemoModal);
    }
    
    // Navigation link clicks
    document.querySelectorAll('.nav__link[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScrollTo(target);
            
            // Close mobile menu if open
            if (navMenu.classList.contains('show-menu')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
                showToast('Please fix the errors above', 'error');
            }
        });
    });
    
    // Initialize header state
    handleHeaderScroll();
    updateActiveNavLink();
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== ANALYTICS =====
function trackEvent(category, action, label = null) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Track important user interactions
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn--primary')) {
        trackEvent('engagement', 'click', 'primary_button');
    }
    
    if (e.target.matches('.nav__register')) {
        trackEvent('engagement', 'click', 'register_button');
    }
    
    if (e.target.matches('.pricing__card .btn')) {
        trackEvent('engagement', 'click', 'pricing_button');
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    showToast('Something went wrong. Please refresh the page.', 'error');
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    showToast('Something went wrong. Please try again.', 'error');
});

// ===== EXPORT FUNCTIONS FOR GLOBAL USE =====
window.MentWel = {
    showToast,
    validateForm,
    trackEvent,
    smoothScrollTo
};

