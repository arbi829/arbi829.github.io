document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  // Highlight current page in nav
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });

  // Contact form alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("✅ Message sent successfully!");
      form.reset();
    });
  }

  // === Scroll-to-Top Button ===
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.innerHTML = "↑";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollBtn.style.display = "block";
    else scrollBtn.style.display = "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Dark Mode Toggle ===
  const darkModeBtn = document.createElement("button");
  darkModeBtn.id = "darkModeToggle";
  darkModeBtn.textContent = "🌙 Dark Mode";
  document.body.appendChild(darkModeBtn);

  // Check saved theme
  const darkMode = localStorage.getItem("dark-mode") === "true";
  if (darkMode) {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️ Light Mode";
  }

  // Toggle on click
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const enabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", enabled);
    darkModeBtn.textContent = enabled ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
// Lightbox Script
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next / Prev
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Close when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
