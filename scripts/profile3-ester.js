// Function to toggle between dark and light modes and save preference
function initializeDarkMode() {
  var darkModeToggle = document.getElementById('dark-mode-toggle');
  if (!darkModeToggle) return;

  // Check if user has saved preference in localStorage
  var savedMode = localStorage.getItem('theme-mode') || 'dark';
  document.body.classList.remove('dark-mode', 'light-mode');
  document.body.classList.add(savedMode + '-mode');
  updateDarkModeButton(savedMode);

  darkModeToggle.addEventListener('click', function() {
    var currentMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    var newMode = currentMode === 'light' ? 'dark' : 'light';

    // Remove old mode, add new mode
    document.body.classList.remove(currentMode + '-mode');
    document.body.classList.add(newMode + '-mode');

    // Save preference
    localStorage.setItem('theme-mode', newMode);
    updateDarkModeButton(newMode);
  });
}

// Function to update dark mode button text
function updateDarkModeButton(mode) {
  var button = document.getElementById('dark-mode-toggle');
  if (button) {
    button.textContent = mode === 'light' ? ' Light Mode' : ' Dark Mode';
  }
}

// ===== SKILLS SECTION: Toggle skill details on click =====
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

// ===== EDUCATION TABLE: Sort by year ascending/descending =====
function initializeEducationSort() {
  var sortButton = document.getElementById('sort-education-btn');
  if (!sortButton) return;

  var isAscending = true;

  sortButton.addEventListener('click', function() {
    var table = document.getElementById('education-table');
    if (!table) return;

    var rows = Array.from(table.querySelectorAll('tbody tr'));

    // Sort by year column (assuming year is in the third column)
    rows.sort(function(a, b) {
      var yearA = a.cells[2].textContent;
      var yearB = b.cells[2].textContent;

      // Parse first 4 digits of string text content safely to manage spans or ranges
      var numA = parseInt(yearA.trim().substring(0, 4)) || 0;
      var numB = parseInt(yearB.trim().substring(0, 4)) || 0;

      if (isAscending) {
        return numA - numB;
      } else {
        return numB - numA;
      }
    });

    // Re-append sorted rows to table body
    var tbody = table.querySelector('tbody');
    rows.forEach(function(row) {
      tbody.appendChild(row);
    });

    // Toggle sort direction for next click
    isAscending = !isAscending;
    sortButton.textContent = isAscending ? 'Sort by Year (Oldest to Newest)' : 'Sort by Year (Newest to Oldest)';
  });
}

// ===== INITIALIZE ALL FEATURES ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
  initializeDarkMode();
  initializeSkillsToggle();
  initializeEducationSort();
});