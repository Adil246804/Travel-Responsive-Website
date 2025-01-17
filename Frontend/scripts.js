const header = document.querySelector("header");

// Toggle navigation bar on scroll
window.addEventListener ("scroll", function(){
    header.classList.toggle("NAV", window.scrollY > 0);
});

// Handle form submission
function handleSubmit(event){
    event.preventDefault();
    alert("Thanks For Submitting");
}

// Smooth scrolling to top
document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#Menu-Button');
    let navbar = document.querySelector('.Navbar');

    menuIcon.onclick = () => {
        // Toggle menu icon between hamburger and close icons
        menuIcon.classList.toggle('bx-x');
        
        // Toggle navbar visibility
        navbar.classList.toggle('active');
        
        // Handle scroll behavior when menu is open
        if (navbar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when window is resized beyond breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            document.body.style.overflow = 'auto';
        }
    });
});

// Smooth scrolling to top button
let MyButton = document.getElementById("ScrollToTopBtn");

// When the user clicks on the button, scroll to the top of the document
window.onscroll = function() {ScrollFunction()};

// When the user scrolls down 20px from the top of the document, show the button
function ScrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        MyButton.style.display = "block";
    } else {
        MyButton.style.display = "none";
    }
}

// When the user clicks on the "Scroll to top" button, scroll to the top of the document
function ScrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

