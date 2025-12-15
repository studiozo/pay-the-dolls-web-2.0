/**
 * PAY THE DØLLS — Custom JavaScript
 * Version 1.0 — December 2025
 */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    initMobileMenu();

    // Smooth scroll for anchor links
    initSmoothScroll();

    // Header scroll behavior
    initHeaderScroll();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            toggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Header Scroll Behavior
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleHeaderScroll(header, lastScrollY);
                lastScrollY = window.scrollY;
                ticking = false;
            });
            ticking = true;
        }
    });
}

function handleHeaderScroll(header, lastScrollY) {
    const currentScrollY = window.scrollY;

    // Add/remove shadow based on scroll position
    if (currentScrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }

    // Optional: Hide header on scroll down, show on scroll up
    // Uncomment if desired
    /*
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
    */
}

/**
 * Add to Cart Animation (for product pages)
 */
function animateAddToCart(button) {
    button.classList.add('btn--loading');

    setTimeout(function () {
        button.classList.remove('btn--loading');
        button.classList.add('btn--success');

        // Update cart count in header
        updateCartCount();

        setTimeout(function () {
            button.classList.remove('btn--success');
        }, 2000);
    }, 800);
}

/**
 * Update Cart Count Badge
 */
function updateCartCount() {
    const cartCountEl = document.querySelector('.nav-cart-count');
    if (!cartCountEl) return;

    // Fetch current cart count from Shopify
    fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
            cartCountEl.textContent = cart.item_count;
            if (cart.item_count > 0) {
                cartCountEl.style.display = 'flex';
            } else {
                cartCountEl.style.display = 'none';
            }
        })
        .catch(error => console.error('Error fetching cart:', error));
}

/**
 * Quantity Selector
 */
function initQuantitySelectors() {
    document.querySelectorAll('.quantity-selector').forEach(selector => {
        const minusBtn = selector.querySelector('.quantity-minus');
        const plusBtn = selector.querySelector('.quantity-plus');
        const input = selector.querySelector('.quantity-input');

        if (!minusBtn || !plusBtn || !input) return;

        minusBtn.addEventListener('click', function () {
            const currentValue = parseInt(input.value) || 1;
            if (currentValue > 1) {
                input.value = currentValue - 1;
                input.dispatchEvent(new Event('change'));
            }
        });

        plusBtn.addEventListener('click', function () {
            const currentValue = parseInt(input.value) || 1;
            const max = parseInt(input.getAttribute('max')) || 99;
            if (currentValue < max) {
                input.value = currentValue + 1;
                input.dispatchEvent(new Event('change'));
            }
        });
    });
}

// Initialize quantity selectors if present
document.addEventListener('DOMContentLoaded', initQuantitySelectors);
