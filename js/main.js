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
