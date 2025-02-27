// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded successfully');
    
    // Example function to change header text on click
    const header = document.querySelector('h1');
    if (header) {
        header.addEventListener('click', function() {
            this.textContent = 'Header clicked!';
            setTimeout(() => {
                this.textContent = 'Welcome to My Website';
            }, 2000);
        });
    }
    
    // Example function to handle navigation clicks
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('You clicked on: ' + this.textContent);
        });
    });
    
    // Add a simple animation to the about section
    const aboutSection = document.querySelector('section');
    if (aboutSection) {
        aboutSection.style.transition = 'background-color 0.5s ease';
        aboutSection.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e0e0e0';
        });
        aboutSection.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
    }
});
