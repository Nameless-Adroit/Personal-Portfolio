//for skills
document.addEventListener("DOMContentLoaded", function() {
    // Select all container blocks for our interactive skills
    const skillContainers = document.querySelectorAll(".skill");

    skillContainers.forEach(container => {
        // Find the trigger element within this container
        const trigger = container.querySelector(".trigger");
        // Find the corresponding detail element within this container
        const detail = container.querySelector(".details");

        if (trigger && detail) {
            trigger.addEventListener("click", function() {
                // Toggle the 'show' class to display/hide details
                detail.classList.toggle("show");
            });
        }
    });
});

//for table data arrangement
// using boolean
let isAscending = true;
const sortBtn = document.getElementById('sortBtn');
const tableBody = document.querySelector('#table tbody');
sortBtn.addEventListener('click', () => {
    let switching = true;
    let shouldSwitch;
    let i;

    // Outer Loop: Keeps repeating the process until no rows need swapping
    while (switching) {
        switching = false;
        const rows = tableBody.rows; // Live collection of <tr> tags inside tbody

        // Inner Loop: Iterates through each data row (except the last one)
        for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            // Target column index [0], which holds the text inside the "Year" cell
            const cellA = rows[i].getElementsByTagName("td")[0].textContent.trim();
            const cellB = rows[i + 1].getElementsByTagName("td")[0].textContent.trim();

            // Check if items should change positions depending on toggle direction
            if (isAscending) {
                if (cellA.localeCompare(cellB) > 0) {
                    shouldSwitch = true;
                    break; // Exit the inner loop to apply the physical swap
                }
            } else {
                if (cellA.localeCompare(cellB) < 0) {
                    shouldSwitch = true;
                    break; // Exit inner loop to apply the physical swap
                }
            }
        }

        // If a mismatch was flagged, swap the positions of the two rows in the DOM layout
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true; // Set to true to rerun the while loop checking sequence again
        }
    }

    // Toggle sorting direction state and update UI button text
    isAscending = !isAscending;
    sortBtn.textContent = isAscending ? "Sort by Year (Ascending)" : "Sort by Year (Descending)";
});


//for hobbies
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
      // Find the specific description paragraph relative to the clicked button
      const description = this.previousElementSibling;
      
      // Toggle the 'collapsed' class
      description.classList.toggle("collapsed");
      
      // Change the button text based on the state
      if (description.classList.contains("collapsed")) {
        this.textContent = "Read More";
      } else {
        this.textContent = "Read Less";
      }
    });
  });
});


//for image
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const triggers = document.querySelectorAll('.photo');

    // Open Lightbox
    triggers.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    // Close Lightbox function
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.src = ''; // Clear source for performance
    };

    // Event: Click Close Button
    closeBtn.addEventListener('click', closeLightbox);

    // Event: Click anywhere outside the image (on the overlay backdrop)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Event: Press Escape Key to Close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});


const scrollTopBtn = document.getElementById("scrollToTopBtn");

scrollTopBtn.style.display = "none"; // Initially hide the button
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block"; // Show button when scrolled down
    } else {
        scrollTopBtn.style.display = "none"; // Hide button when near top
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// 3. Smooth scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'
    });
});

const toggleBtn = document.getElementById('theme-toggle');
    
    toggleBtn.addEventListener('click', () => {
        // Toggle the dark-mode class on the body
        document.body.classList.toggle('dark-mode');
        
        // Update the button text depending on active mode
        if (document.body.classList.contains('dark-mode')) {
            toggleBtn.innerHTML = "Light Mode";
        } else {
            toggleBtn.innerHTML = "Dark Mode";
        }
    });