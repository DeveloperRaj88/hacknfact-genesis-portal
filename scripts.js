
// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('hidden');
        });
    }
    
    // Set active navigation link based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href)) {
            link.classList.add('active');
        }
    });
    
    // Form validation
    setupForms();
    
    // Initialize carousels if they exist
    initCarousels();
    
    // Initialize dialogs if they exist
    initDialogs();
});

// Form validation and handling
function setupForms() {
    const contactForm = document.getElementById('contactForm');
    const submitForm = document.getElementById('submitForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(contactForm)) {
                // Show success message
                alert('Message sent successfully! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    if (submitForm) {
        const typeSelect = document.getElementById('type');
        const categorySelect = document.getElementById('category');
        const hackCategories = document.getElementById('hackCategories');
        const factCategories = document.getElementById('factCategories');
        const successMessage = document.getElementById('successMessage');
        
        if (typeSelect && categorySelect) {
            typeSelect.addEventListener('change', function() {
                categorySelect.disabled = false;
                
                // Show relevant categories
                if (this.value === 'hack') {
                    hackCategories.classList.remove('hidden');
                    factCategories.classList.add('hidden');
                } else if (this.value === 'fact') {
                    hackCategories.classList.add('hidden');
                    factCategories.classList.remove('hidden');
                }
            });
        }
        
        submitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(submitForm)) {
                // Show success message
                submitForm.classList.add('hidden');
                if (successMessage) {
                    successMessage.classList.remove('hidden');
                }
            }
        });
    }
}

function validateForm(form) {
    let valid = true;
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        const errorElement = document.getElementById(`${input.id}Error`);
        if (!input.value && input.hasAttribute('required')) {
            if (errorElement) {
                errorElement.textContent = 'This field is required';
                errorElement.style.display = 'block';
            }
            valid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            if (errorElement) {
                errorElement.textContent = 'Please enter a valid email address';
                errorElement.style.display = 'block';
            }
            valid = false;
        } else {
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        }
    });
    
    return valid;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Carousel functionality
function initCarousels() {
    const carousel = document.querySelector('.carousel');
    
    if (carousel) {
        const content = carousel.querySelector('.carousel-content');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        let currentIndex = 0;
        
        // Set up initial positioning
        if (content && items.length) {
            content.style.width = `${items.length * 100}%`;
            items.forEach(item => {
                item.style.width = `${100 / items.length}%`;
            });
        }
        
        // Auto-slide functionality
        let interval = setInterval(nextSlide, 2000);
        
        // Reset interval when manually changing slides
        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(nextSlide, 2000);
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        }
        
        function updateCarousel() {
            if (content) {
                content.style.transform = `translateX(-${currentIndex * (100 / items.length)}%)`;
            }
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }
        
        // Pause auto-sliding when hovering over carousel
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                clearInterval(interval);
            });
            
            carousel.addEventListener('mouseleave', () => {
                interval = setInterval(nextSlide, 2000);
            });
        }
    }
}

// Dialog/Modal functionality
function initDialogs() {
    const dialogTriggers = document.querySelectorAll('[data-dialog-target]');
    
    dialogTriggers.forEach(trigger => {
        const targetId = trigger.getAttribute('data-dialog-target');
        const dialog = document.getElementById(targetId);
        
        if (dialog) {
            const closeBtn = dialog.querySelector('.dialog-close');
            
            trigger.addEventListener('click', () => {
                dialog.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
            
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    dialog.classList.add('hidden');
                    document.body.style.overflow = '';
                });
            }
            
            // Close dialog when clicking outside
            dialog.addEventListener('click', (e) => {
                if (e.target === dialog) {
                    dialog.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            });
            
            // Close dialog when pressing escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !dialog.classList.contains('hidden')) {
                    dialog.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            });
        }
    });
}
