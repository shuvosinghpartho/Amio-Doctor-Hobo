// Smooth scroll to Features section
function scrollToFeatures() {
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
}

// Open Resources Section
function openResources() {
    document.querySelector('#resources').scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received.`);

    // Clear form fields after submission
    contactForm.reset();
});
