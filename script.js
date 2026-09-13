// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent = new Date().getFullYear();


// =========================
// SIMPLE SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .service-card, .project-card, .stat-card, .skill, .contact-box"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});