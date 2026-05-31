// Select dark mode button
const darkModeBtn = document.getElementById("darkModeBtn");

// Dark mode — cleaner toggle, properly adds AND removes class
darkModeBtn.addEventListener("click", function() {
    const isDark = document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
    darkModeBtn.classList.toggle("dark-mode-btn", isDark);
});


// Select profile image
const profileImage = document.getElementById("profileImage");

// Select lightbox container
const lightbox = document.getElementById("lightbox");

// Select image inside lightbox
const lightboxImg = document.getElementById("lightboxImg");

// Select close button
const closeBtn = document.getElementById("closeBtn");

// Open image in lightbox when clicked
profileImage.addEventListener("click", function(){

    // Display lightbox
    lightbox.style.display = "flex";

    // Copy image source
    lightboxImg.src = profileImage.src;

});

// Close lightbox when close button is clicked
closeBtn.addEventListener("click", function(){

    // Hide lightbox
    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});


// Select scroll button
const scrollBtn = document.getElementById("scrollBtn");

// Detect page scrolling
window.addEventListener("scroll", function(){

    // Check if user scrolled more than 200 pixels
    if(window.scrollY > 200){

        // Show button
        scrollBtn.style.display = "block";

    }else{

        // Hide button
        scrollBtn.style.display = "none";

    }

});

// Scroll page to top when button clicked
scrollBtn.addEventListener("click", function(){

    // Smooth scroll to top
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});