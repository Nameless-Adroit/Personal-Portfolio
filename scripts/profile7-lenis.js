// --- TABLE SORTING LOGIC ---
const sortBtn = document.getElementById("sort-year-btn");

if (sortBtn) {
    let isAscending = true;

    sortBtn.addEventListener("click", () => {
        const table = document.querySelector(".edu-table");
        // Get all rows, but skip the first one (the header)
        const rows = Array.from(table.querySelectorAll("tr")).slice(1);

        rows.sort((rowA, rowB) => {
            // Index 2 is your 'Time lapse' column
            const valA = rowA.cells[2].textContent.trim();
            const valB = rowB.cells[2].textContent.trim();

            return isAscending 
                ? valA.localeCompare(valB) 
                : valB.localeCompare(valA);
        });

        // Re-append the sorted rows back to the table
        rows.forEach(row => table.appendChild(row));
        
        // Toggle direction
        isAscending = !isAscending;
    });
}



// --- SCROLL TO TOP LOGIC ---
const topBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    // Check if user has scrolled down more than 200px
    if (window.scrollY > 200) {
        topBtn.classList.remove("hidden");
    } else {
        topBtn.classList.add("hidden");
    }
});

topBtn.addEventListener("click", () => {
    // Smoothly scroll back to the very top (y: 0)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// --- READ MORE/LESS TOGGLE ---
const toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Find the text box right before the button
        const textContainer = btn.previousElementSibling;
        
        // Toggle the 'expanded' class
        textContainer.classList.toggle("expanded");
        
        // Switch the button text
        if (textContainer.classList.contains("expanded")) {
            btn.textContent = "Less";
        } else {
            btn.textContent = "More";
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skills > li");

    skillItems.forEach(item => {
        const details = item.querySelector(".skills-details");
        
        if (details) {
            details.classList.add("is-hidden");
            item.style.cursor = "pointer";

            item.addEventListener("click", () => {
                details.classList.toggle("is-hidden");
                
                // THE NEW LINE: Toggles an 'expanded' class on the box itself
                item.classList.toggle("expanded");
            });
        }
    });
});


let lightbox      = document.getElementById('lightbox');
let lightboxImg   = document.getElementById('lightboxImg');
let lightboxClose = document.getElementById('lightboxClose');
let triggers      = document.querySelectorAll('.lightbox-trigger');

// Open lightbox when any trigger image is clicked
triggers.forEach((imgEl) => {
    imgEl.addEventListener('click', () => {
        lightboxImg.src = imgEl.src;
        lightbox.style.display = 'flex';
    });
});



// Close lightbox when the ✕ button is clicked
lightboxClose.addEventListener('click',(img)=>{
    lightbox.style.display = 'none';
    lightboxImg.src = '';   // clear the src to stop the image loading
});

// Also close lightbox when the user clicks the dark backdrop (not the image)
lightbox.addEventListener('click',(event)=>{

    if (event.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }
});





const themeBtn = document.getElementById('theme-toggle');

// 1. Check if the user already chose light mode previously
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeBtn.textContent = '🌙 Dark Mode';
}

// 2. Listen for clicks on the toggle button
themeBtn.addEventListener('click', () => {
    // Toggle the class on the body
    document.body.classList.toggle('light-mode');
    
    // Update the button text and save the preference
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '🌙 Dark Mode';
    } else {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '☀️';
    }
});