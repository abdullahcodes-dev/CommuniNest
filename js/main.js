const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

const reportModal = document.querySelector("#reportModal");
const reportButtons = document.querySelectorAll(".report-btn");
const closeModalBtn = document.querySelector(".modal-close");
const reportForm = document.querySelector(".modal-form");

// Mobile Navbar
navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Report Modal
reportButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        reportModal.showModal();
    });
});

closeModalBtn.addEventListener("click", () => {
    reportModal.close();
});

reportForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("✅ Issue submitted successfully!");

    reportForm.reset();
    reportModal.close();
});