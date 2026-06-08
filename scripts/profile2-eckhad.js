document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SKILLS SECTION: SHOW/HIDE DETAILS PARAGRAPH
    function initSkillsToggle() {
        const skillCards = document.querySelectorAll(".skill");
        
        skillCards.forEach(card => {
            const details = card.querySelector(".details");
            if (!details) return;
            
            // Set initial state via CSS-friendly hidden class
            details.classList.add("hidden-detail");
            
            card.addEventListener("click", (e) => {
                // Prevent toggle conflict if they are clicking nested interactive items
                if(e.target.tagName === "A" || e.target.tagName === "BUTTON") return;
                
                details.classList.toggle("hidden-detail");
            });
        });
    }

    // 2. EDUCATION TABLE: JS-POWERED SORT BUTTON
    function initTableSort() {
        const table = document.querySelector("#education-table");
        if (!table) return;

        // Create the sort button dynamically and insert it near the table
        const sortBtn = document.createElement("button");
        sortBtn.innerText = "Sort by Year (Asc)";
        sortBtn.className = "sort-btn";
        table.parentNode.insertBefore(sortBtn, table);

        let ascending = true;

        sortBtn.addEventListener("click", () => {
            const tbody = table.querySelector("tbody") || table;
            const rows = Array.from(tbody.querySelectorAll("tr"));
            
            // Find the index of the Year column
            const headers = Array.from(table.querySelectorAll("th"));
            const yearColumnIndex = headers.findIndex(th => th.innerText.toLowerCase().includes("year"));
            const targetIndex = yearColumnIndex !== -1 ? yearColumnIndex : 2;

            rows.sort((rowA, rowB) => {
                const cellA = parseInt(rowA.cells[targetIndex].innerText.trim(), 10) || 0;
                const cellB = parseInt(rowB.cells[targetIndex].innerText.trim(), 10) || 0;
                
                return ascending ? cellA - cellB : cellB - cellA;
            });

            // Re-append sorted rows back to container
            rows.forEach(row => tbody.appendChild(row));
            
            // Flip ordering toggle state
            sortBtn.innerText = `Sort by Year (${ascending ? "Desc" : "Asc"})`;
            ascending = !ascending;
        });
    }

    // 3. HOBBIES SECTION: READ MORE / READ LESS
    function initHobbiesToggle() {
        const hobbyTexts = document.querySelectorAll(".hobby-description");
        
        hobbyTexts.forEach(desc => {
            desc.classList.add("hobby-collapsed");
            
            // Create a custom toggle trigger anchor below description
            const toggleLink = document.createElement("a");
            toggleLink.innerText = "Read More";
            toggleLink.href = "#";
            toggleLink.className = "hobby-toggle";
            
            desc.parentNode.insertBefore(toggleLink, desc.nextSibling);
            
            toggleLink.addEventListener("click", (e) => {
                e.preventDefault();
                const isCollapsed = desc.classList.toggle("hobby-collapsed");
                toggleLink.innerText = isCollapsed ? "Read More" : "Read Less";
            });
        });
    }

    // 4. IMAGE SECTION: LIGHTBOX OVERLAY
    function initLightbox() {
        const images = document.querySelectorAll(".image1 img, .image2 img");
        if(images.length === 0) return;

        // Build container structural setup via Javascript execution
        const lightboxOverlay = document.createElement("div");
        lightboxOverlay.className = "lightbox-overlay";
        
        const lightboxImg = document.createElement("img");
        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.className = "lightbox-close";
        
        lightboxOverlay.appendChild(closeBtn);
        lightboxOverlay.appendChild(lightboxImg);
        document.body.appendChild(lightboxOverlay);

        images.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightboxOverlay.style.display = "flex";
            });
        });

        // Close logic setups
        closeBtn.addEventListener("click", () => lightboxOverlay.style.display = "none");
        lightboxOverlay.addEventListener("click", (e) => {
            if(e.target === lightboxOverlay) lightboxOverlay.style.display = "none";
        });
    }

    // 5. NAVIGATION: SCROLL-TO-TOP BUTTON
    function initScrollToTop() {
        const topBtn = document.createElement("button");
        topBtn.innerText = "▲ Top";
        topBtn.className = "scroll-top-btn";
        document.body.appendChild(topBtn);

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                topBtn.classList.add("visible");
            } else {
                topBtn.classList.remove("visible");
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 6. DARK / LIGHT MODE TOGGLE (BODY CLASS TARGET)
    function initThemeToggle() {
        const header = document.querySelector(".nav-container") || document.body;
        
        const toggleBtn = document.createElement("button");
        toggleBtn.innerHTML = "🌓 Toggle Mode";
        toggleBtn.className = "theme-toggle-btn";
        header.appendChild(toggleBtn);

        // Check user state layout cache storage
        if (localStorage.getItem("portfolio-theme") === "dark") {
            document.body.classList.add("dark-mode");
        }

        toggleBtn.addEventListener("click", () => {
            const isDarkActive = document.body.classList.toggle("dark-mode");
            localStorage.setItem("portfolio-theme", isDarkActive ? "dark" : "light");
        });
    }

    // Run all features sequentially
    initSkillsToggle();
    initTableSort();
    initHobbiesToggle();
    initLightbox();
    initScrollToTop();
    initThemeToggle();
});