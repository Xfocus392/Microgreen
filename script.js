document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('header nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            // Optional: Change hamburger icon to 'X' and back
            if (navUl.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; // Close icon
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.innerHTML = '☰'; // Hamburger icon
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close mobile menu after clicking a link
            if (navUl && navUl.classList.contains('active')) {
                navUl.classList.remove('active');
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Basic form validation feedback (can be expanded)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission for now
            // Example: Check if name and email are filled
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all required fields (Name, Email, Message).');
                return;
            }
            // Simple email validation regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // If validation passes (for this demo, we just alert)
            alert('Form submitted successfully (simulated)! Thank you for your message.');
            contactForm.reset(); // Reset form fields
        });
    }

    // Placeholder for image paths - replace these with actual paths or dynamic loading
    const placeholderImages = {
        facebook: "icons/facebook_icon_white.svg", // Example path
        instagram: "icons/instagram_icon_white.svg", // Example path
        twitter: "icons/twitter_icon_white.svg", // Example path
        microgreens_hero: "images/microgreens_hero_large.jpg",
        sunflower_microgreens: "images/sunflower_microgreens.jpg",
        radish_microgreens: "images/radish_microgreens.jpg",
        pea_shoots_microgreens: "images/pea_shoots_microgreens.jpg",
    };

    // Update social media icon placeholders
    const socialLinks = document.querySelectorAll('.social-links a img');
    socialLinks.forEach(img => {
        if (img.alt.toLowerCase().includes('facebook')) img.src = placeholderImages.facebook;
        if (img.alt.toLowerCase().includes('instagram')) img.src = placeholderImages.instagram;
        if (img.alt.toLowerCase().includes('twitter')) img.src = placeholderImages.twitter;
    });

    // Update hero image placeholder
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        // The image is set via CSS background, so this is just a note.
        // If it were an <img> tag:
        // const heroImg = heroSection.querySelector('img');
        // if(heroImg) heroImg.src = placeholderImages.microgreens_hero;
        console.log("Hero image is set via CSS background. Update 'style.css' for actual image.");
    }

    // Update product image placeholders
    const productCards = document.querySelectorAll('.product-card img');
    productCards.forEach(img => {
        if (img.alt.toLowerCase().includes('sunflower')) img.src = placeholderImages.sunflower_microgreens;
        if (img.alt.toLowerCase().includes('radish')) img.src = placeholderImages.radish_microgreens;
        if (img.alt.toLowerCase().includes('pea shoots')) img.src = placeholderImages.pea_shoots_microgreens;
    });

    console.log("GreenBite Microgreens site JS initialized.");
    console.log("Remember to replace placeholder image URLs in 'style.css' and 'script.js' (or HTML if used there) with actual image paths.");
    console.log("Also, update the WhatsApp link 'yourphonenumber' and '[Your City]' in index.html.");

});
