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
