// Smooth Scrolling for Navigation Links
document.querySelectorAll("header nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for sticky header
                behavior: "smooth"
            });
        }
    });
});

// Dynamic Button Interaction in the Hero Section
const heroButton = document.querySelector(".hero button");
heroButton.addEventListener("click", () => {
    const resourcesSection = document.querySelector(".resources");
    resourcesSection.scrollIntoView({ behavior: "smooth" });
});

// Highlight Navigation Links on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust for sticky header
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
});

// Resource Card Animation on Scroll
const resourceCards = document.querySelectorAll(".resource-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

resourceCards.forEach(card => {
    observer.observe(card);
});

// Contact Form Submission (Mockup)
const contactForm = document.querySelector(".contact form");
contactForm.addEventListener("submit", event => {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    contactForm.reset();
});




// document.querySelectorAll('.footer-links ul li a').forEach(item => {
//     item.addEventListener('click', event => {
//       alert(`You clicked on ${event.target.innerText}`);
//     });
//   });



document.getElementById("demoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! We will contact you shortly.");
});


// Function to open the YouTube playlist in a new tab
function openPlaylist(url) {
    window.open(url, "_blank");
}

// Add this function to your existing script.js file
function openExamMaterial(url) {
    window.open(url, '_blank');
}



document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    // Validate Name Input
    if (name) {
        const feedbackSection = document.querySelector(".feedback");

        // Replace Feedback Section Content with Thank You Animation
        feedbackSection.innerHTML = `
            <div class="thank-you">
                <h2>Thank You, ${name}!</h2>
                <p>We appreciate your feedback. Your input helps us improve!</p>
                <img src="https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif" alt="Thank You Animation" />
            </div>
        `;
    } else {
        alert("Please enter your name before submitting.");
    }
});



