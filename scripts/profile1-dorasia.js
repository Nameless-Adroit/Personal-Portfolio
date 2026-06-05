// ===============================
// DARK MODE TOGGLE
// ===============================

// Select dark mode button
const darkModeBtn = document.getElementById("darkModeBtn");

// Dark mode — cleaner toggle, properly adds AND removes class
if(darkModeBtn) {
    darkModeBtn.addEventListener("click", function() {
        const isDark = document.body.classList.toggle("dark-mode");
        darkModeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
        darkModeBtn.classList.toggle("dark-mode-btn", isDark);
    });
}


// ===============================
// LIGHTBOX IMAGE
// ===============================

// Select profile image
const profileImage = document.getElementById("profileImage");

// Select lightbox container
const lightbox = document.getElementById("lightbox");

// Select image inside lightbox
const lightboxImg = document.getElementById("lightboxImg");

// Select close button
const closeBtn = document.getElementById("closeBtn");

if (profileImage && lightbox && lightboxImg && closeBtn) {
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
}

// ===============================
// SCROLL TO TOP
// ===============================

// Select scroll button
const scrollBtn = document.getElementById("scrollBtn");

if (scrollBtn) {
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
}

// ===============================
// SKILLS TOGGLE
// ===============================

const skillItems = document.querySelectorAll("#skillsList > li");

skillItems.forEach(function (item) {
    item.addEventListener("click", function () {

        const sub = this.querySelector("ul");

        if (sub) {
            sub.classList.toggle("hidden");
        }
    });
});


// ===============================
// EDUCATION SORT
// ===============================

const sortBtn = document.getElementById("sortEdu");

let ascending = true;

if (sortBtn) {

    sortBtn.addEventListener("click", function () {

        const table = document.querySelector("#educationTable");
        const rows = Array.from(table.rows).slice(1);

        rows.sort(function (a, b) {

            const yearA = parseInt(a.cells[2].textContent);
            const yearB = parseInt(b.cells[2].textContent);

            return ascending ? yearA - yearB : yearB - yearA;
        });

        rows.forEach(row => table.appendChild(row));

        ascending = !ascending;
    });
}


// ===============================
// HOBBIES TOGGLE (READ MORE)
// ===============================

// Grab all the buttons we made in the HTML
const buttons = document.querySelectorAll(".hobby-btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
       
        const listItem = btn.parentElement;

        listItem.classList.toggle("is-expanded");
        
        if (listItem.classList.contains("is-expanded")) {
            btn.textContent = "Read Less";
        } else {
            btn.textContent = "Read More";
        }
    });
});