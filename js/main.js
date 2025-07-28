const themeToggleBtn = document.getElementById('theme-toggle'); 
const iconElement = themeToggleBtn.querySelector('i');
const bodyElement = document.body; // لتطبيق الكلاس على <html>

function updateToggleIcon() {
    if (bodyElement.classList.contains('dark')) {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
    } else {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
    }
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark');
    const newTheme = bodyElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    updateToggleIcon();
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        bodyElement.classList.add('dark');
    } else {
        bodyElement.classList.remove('dark');
    }
    updateToggleIcon();
});



let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }

    lastScrollY = window.scrollY;
});


  const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('navLinks');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
  });
