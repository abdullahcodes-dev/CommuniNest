const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

const reportModal = document.querySelector("#reportModal");
const reportButtons = document.querySelectorAll(".report-btn");
const closeModalBtn = document.querySelector(".modal-close");
const reportForm = document.querySelector(".modal-form");
const submitBtn = document.querySelector("#submitReport");

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

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    setTimeout(() => {
        reportForm.reset();
        reportModal.close();

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Report";
    }, 1000);
});

reportModal.addEventListener("click", (e) => {
    const dialogDimensions = reportModal.getBoundingClientRect();

    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        reportModal.close();
    }
});

lucide.createIcons();