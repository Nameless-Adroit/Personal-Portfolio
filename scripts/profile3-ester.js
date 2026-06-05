 //====dark mode toggle====
    function initializeDarkMode() {
      var darkModeToggle = document.getElementById('dark-mode-toggle');
      if (!darkModeToggle) return;
      
      var savedMode = localStorage.getItem('theme-mode') || 'dark';
      document.body.classList.remove('dark-mode', 'light-mode');
      document.body.classList.add(savedMode + '-mode');
      updateDarkModeButton(savedMode);
      
      darkModeToggle.addEventListener('click', function() {
        var currentMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        var newMode = currentMode === 'light' ? 'dark' : 'light';
        
        document.body.classList.remove(currentMode + '-mode');
        document.body.classList.add(newMode + '-mode');
        
        localStorage.setItem('theme-mode', newMode);
        updateDarkModeButton(newMode);
      });
    }

    function updateDarkModeButton(mode) {
      var button = document.getElementById('dark-mode-toggle');
      if (button) {
        button.textContent = mode === 'light' ? ' Light Mode' : ' Dark Mode';
      }
    }

    // ==== Toggle skill details =====
    function initializeSkillsToggle() {
      var skillItems = document.querySelectorAll('.skill-card');
      skillItems.forEach(function(item) {
        item.addEventListener('click', function() {
          var details = this.querySelector('.skill-details');
          if (details) {
            details.classList.toggle('hidden');
          }
        });
      });
    }
      // ===== INTERESTS SECTION: Toggle interest details on click =====
    function initializeInterestsToggle() {
      var interestPills = document.querySelectorAll('.interest-pill');
      interestPills.forEach(function(pill) {
        pill.addEventListener('click', function() {
          var details = this.querySelector('.interest-details');
          if (details) {
            details.classList.toggle('hidden');
          }
        });
      });
    }


    // ===== EDUCATION TABLE: Sort by year =====
    function initializeEducationSort() {
      var sortButton = document.getElementById('sort-education-btn');
      if (!sortButton) return;
      
      var isAscending = true;
      
      sortButton.addEventListener('click', function() {
        var table = document.getElementById('education-table');
        if (!table) return;
        
        var rows = Array.from(table.querySelectorAll('tbody tr'));
        
        rows.sort(function(a, b) {
          var yearA = a.cells[2].textContent;
          var yearB = b.cells[2].textContent;
          
          var numA = parseInt(yearA) || 0;
          var numB = parseInt(yearB) || 0;
          
          if (isAscending) {
            return numA - numB;
          } else {
            return numB - numA;
          }
        });
        
        var tbody = table.querySelector('tbody');
        rows.forEach(function(row) {
          tbody.appendChild(row);
        });
        
        isAscending = !isAscending;
        sortButton.textContent = isAscending ? 'Sort by Year (Oldest to Newest)' : 'Sort by Year (Newest to Oldest)';
      });
    }

    // ===== IMAGE LIGHTBOX =====
    function initializeLightbox() {
      var images = document.querySelectorAll('.lightbox-image');
      
      if (!document.getElementById('lightbox')) {
        var lightboxHTML = '<div id="lightbox" class="lightbox">' +
                           '<div class="lightbox-content">' +
                           '<img id="lightbox-img" src="" alt="Enlarged">' +
                           '<button id="lightbox-close" class="lightbox-close">&times;</button>' +
                           '</div></div>';
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
      }
      
      var lightbox = document.getElementById('lightbox');
      var lightboxImg = document.getElementById('lightbox-img');
      var closeBtn = document.getElementById('lightbox-close');
      
      images.forEach(function(img) {
        img.addEventListener('click', function() {
          var imageSrc = this.getAttribute('data-image') || this.src;
          lightboxImg.src = imageSrc;
          lightbox.classList.add('active');
        });
      });
      
      function closeLightbox() {
        lightbox.classList.remove('active');
      }
      
      closeBtn.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', function(event) {
        if (event.target === this) {
          closeLightbox();
        }
      });
      
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          closeLightbox();
        }
      });
    }

    // ===== SCROLL-TO-TOP BUTTON =====
    function initializeScrollToTop() {
      var scrollTopBtn = document.getElementById('scroll-to-top-btn');
      
      if (!scrollTopBtn) {
        var btnHTML = '<button id="scroll-to-top-btn" class="scroll-to-top-btn">↑</button>';
        document.body.insertAdjacentHTML('beforeend', btnHTML);
        scrollTopBtn = document.getElementById('scroll-to-top-btn');
      }
      
      window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
          scrollTopBtn.classList.add('visible');
        } else {
          scrollTopBtn.classList.remove('visible');
        }
      });
      
      scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // ===== INITIALIZE ALL FEATURES =====
    document.addEventListener('DOMContentLoaded', function() {
      initializeDarkMode();
      initializeSkillsToggle();
      initializeInterestsToggle();
      initializeEducationSort();
      initializeLightbox();
      initializeScrollToTop();
    });