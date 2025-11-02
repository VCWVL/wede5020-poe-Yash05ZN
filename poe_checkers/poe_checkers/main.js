/**
 * =====================================================================
 *   FreshMart Website - main.js
 *   Central script for all common interactive elements.
 * =====================================================================
 */

document.addEventListener('DOMContentLoaded', function() {

    /**
     * --- Mobile Menu Toggle ---
     * Toggles the 'show' class on the main navigation when the mobile
     * menu button is clicked.
     */
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }

    /**
     * --- Cookie Consent Banner ---
     * Manages the display and user choice for the cookie consent banner.
     * The choice is saved in localStorage to prevent the banner from
     * appearing on subsequent visits.
     */
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    const rejectCookies = document.getElementById('rejectCookies');

    if (cookieConsent && !localStorage.getItem('cookieConsent')) {
        setTimeout(() => cookieConsent.classList.add('show'), 1000);
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieConsent.classList.remove('show');
        });
    }

    if (rejectCookies) {
        rejectCookies.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'rejected');
            cookieConsent.classList.remove('show');
        });
    }

    /**
     * --- Newsletter Subscription Form ---
     * Handles the newsletter subscription form in the footer, providing
     * a non-disruptive success message.
     */
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const statusDiv = document.getElementById('newsletterStatus');

            if (emailInput && statusDiv && emailInput.value.trim() !== '') {
                // Show success message
                statusDiv.textContent = 'Thank you for subscribing!';
                statusDiv.className = 'form-status success';
                statusDiv.style.display = 'block';
                
                // Clear the input and hide the message after a few seconds
                emailInput.value = '';
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 4000);
            }
        });
    }

});