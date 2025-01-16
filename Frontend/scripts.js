const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("NAV", window.scrollY > 0);
});

function handleSubmit(event){
    event.preventDefault();
    alert("Thanks For Submitting");
}

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

let MyButton = document.getElementById("ScrollToTopBtn");

window.onscroll = function() {ScrollFunction()};

function ScrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        MyButton.style.display = "block";
    } else {
        MyButton.style.display = "none";
    }
}

function ScrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

