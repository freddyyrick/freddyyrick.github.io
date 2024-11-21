const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const darkModeToggle = document.getElementById('darkModeToggle');
const sections = document.querySelectorAll('.tskills, .education, .projects');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    
    // Save preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Apply dark mode on page load if enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    sections.forEach(section => section.classList.add('dark-mode'));
}



document.querySelector('.footer-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);

    // Show loading feedback
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        // Send data to Formspree
        const response = await fetch('https://formspree.io/f/meoqzvgz', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Message sent successfully!');
            event.target.reset(); // Clear the form
        } else {
            alert('Failed to send the message. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    } finally {
        // Restore button state
        submitButton.textContent = 'Send';
        submitButton.disabled = false;
    }
});
