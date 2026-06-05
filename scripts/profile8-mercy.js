// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// MESSAGE
function showMessage() {
  alert("Thanks for reaching out!");
}

// INTERACTIVE CARDS LOGIC
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

// SCROLL TO TOP LOGIC
const scrollTopBtn = document.getElementById("scrollTopBtn");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// COMBINED SCROLL LISTENER
const sections = document.querySelectorAll("section, body");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  if (window.scrollY > 300) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.visibility = "visible";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.visibility = "hidden";
  }

  sections.forEach(section => {
    if (section.id && scrollY >= section.offsetTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});