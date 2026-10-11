/**
 * ==============================================================================
 * AXELLE CONSULTING / HEOR.AI - INTERACTIVE CLIENT JAVASCRIPT
 * 
 * LEARNING CONTEXT FOR BEGINNERS:
 * JavaScript adds interactivity and dynamic behavior to the web page.
 * Key concepts covered in this script:
 * 1. DOM Traversal & Selection: Grabbing HTML elements using IDs and classes.
 * 2. Event Listeners: Responding to user clicks, keyboard presses, and form submits.
 * 3. Form Handling: Validating input and preventing browser page reload with e.preventDefault().
 * 4. Modal Dialogs: Showing and hiding interactive overlays with accessible keyboard shortcuts (ESC key).
 * ==============================================================================
 */

// Run scripts once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. AUTOMATIC COPYRIGHT YEAR
       LEARNING CONTEXT:
       Instead of manually updating the copyright year every January,
       JavaScript retrieves the current year dynamically from the visitor's device.
       -------------------------------------------------------------------------- */
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    /* --------------------------------------------------------------------------
       2. MOBILE NAVIGATION MENU TOGGLE
       LEARNING CONTEXT:
       On small screens, the desktop menu collapses into a "hamburger" icon.
       Clicking toggles an 'is-open' class on the menu and updates accessibility attributes (aria-expanded).
       -------------------------------------------------------------------------- */
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile menu automatically when any nav link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* --------------------------------------------------------------------------
       3. CONSULTATION MODAL (POPUP)
       LEARNING CONTEXT:
       Modals give users an instant popup dialog to take action without page reloads.
       Best practice: Listen for 'Escape' key to close for keyboard accessibility.
       -------------------------------------------------------------------------- */
    const modal = document.getElementById('consultationModal');
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalClose = document.getElementById('modalClose');
    const consultationForm = document.getElementById('consultationForm');
    const modalFeedback = document.getElementById('modalFeedback');

    function openModal() {
        if (modal) {
            modal.classList.add('is-active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Prevents background scrolling
            const firstInput = modal.querySelector('input');
            if (firstInput) firstInput.focus();
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('is-active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Restores background scrolling
        }
    }

    // Attach click events to all elements configured with .modal-trigger
    modalTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // If the trigger is also an anchor with href="#contact", allow it to open modal
            if (btn.getAttribute('href') === '#consultation-modal' || btn.classList.contains('btn-outline')) {
                e.preventDefault();
                openModal();
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close when clicking outside the dialog on the backdrop
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close with the ESC key (Accessibility best practice)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            closeModal();
        }
    });

    // Handle Consultation Form Submit
    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload
            const name = document.getElementById('modalName').value.trim();

            if (modalFeedback) {
                modalFeedback.className = 'modal-feedback success';
                modalFeedback.textContent = `Thank you, ${name}! Your consultation request has been received. We will reach out shortly.`;
            }

            consultationForm.reset();

            // Automatically close modal after 2.5 seconds
            setTimeout(() => {
                closeModal();
                if (modalFeedback) modalFeedback.textContent = '';
            }, 2500);
        });
    }

    /* --------------------------------------------------------------------------
       4. CONTACT FORM VALIDATION & SUBMISSION
       LEARNING CONTEXT:
       Demonstrates client-side event interception.
       In production static hosting (GitHub Pages), client forms can send data via:
       - Formspree (https://formspree.io)
       - EmailJS (https://www.emailjs.com)
       - Web3Forms (https://web3forms.com)
       - Or direct mailto: link
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('userName');
            const emailInput = document.getElementById('userEmail');
            const messageInput = document.getElementById('userMessage');

            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                showFeedback('Please fill out all required fields.', 'error');
                return;
            }

            // Simulate successful form dispatch
            showFeedback(`Thank you for reaching out, ${nameInput.value}! Your message has been sent to axelleconsulting@outlook.com.`, 'success');
            contactForm.reset();
        });
    }

    function showFeedback(message, type) {
        if (!formFeedback) return;
        formFeedback.textContent = message;
        formFeedback.className = `form-feedback ${type}`;

        setTimeout(() => {
            formFeedback.textContent = '';
            formFeedback.className = 'form-feedback';
        }, 5000);
    }
});
