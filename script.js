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

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Send the form data to the backend (Node.js)
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(response => alert('Message sent successfully!'))
    .catch(error => alert('Error: ' + error));
});
