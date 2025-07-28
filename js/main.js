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


  (() => {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.dots');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `انتقال إلى الشريحة ${i + 1}`);
        dot.setAttribute('role', 'tab');
    dot.className = `
      w-[14px] h-[14px] mx-[6px] rounded-full bg-white/60 transition-colors 
      hover:bg-white focus:outline-none
    `;

    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);

    }


    // Tailwind utility classes (matching your custom styles)

    const dots = dotsContainer.querySelectorAll('button');
    dots[0].classList.add('bg-primary');

function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.remove('bg-white/60');
            dot.classList.add('bg-primary');
        } else {
            dot.classList.remove('bg-primary');
            dot.classList.add('bg-white/60');
        }
    });
}

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Swipe support
    let startX = 0;
    let isSwiping = false;

    slidesContainer.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    slidesContainer.addEventListener('touchmove', e => {
        if (!isSwiping) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (diff > 50) { // swipe left
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
            isSwiping = false;
        } else if (diff < -50) { // swipe right
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
            isSwiping = false;
        }
    });

    slidesContainer.addEventListener('touchend', () => {
        isSwiping = false;
    });

    // Optional: Auto-slide every 5s
    let autoSlideInterval = setInterval(() => {
        console.log('Auto sliding to next slide');
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, 5000);

    // Pause auto-slide on hover/touchstart
    document.querySelector('.slider').addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    document.querySelector('.slider').addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }, 5000);
    });
})();