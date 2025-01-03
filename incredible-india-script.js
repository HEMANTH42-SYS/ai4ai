// Get the button element
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Adjust visibility threshold
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});