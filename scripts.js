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



