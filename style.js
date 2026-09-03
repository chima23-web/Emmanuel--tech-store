// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");

  menuToggle.textContent =
    mainNav.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent = new Date().getFullYear();


// ===============================
// ANIMATED STATISTICS
// ===============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);
      let current = 0;

      const increment = Math.max(1, Math.ceil(target / 80));

      const updateCounter = () => {
        current += increment;

        if (current >= target) {
          counter.textContent = target;
          return;
        }

        counter.textContent = current;
        requestAnimationFrame(updateCounter);
      };

      updateCounter();
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.5 }
);

counters.forEach(counter => {
  counterObserver.observe(counter);
});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formMessage.textContent =
    `Thank you, ${name}! Your message has been received. Our school office will contact you shortly.`;

  contactForm.reset();
});


// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ===============================
// SIMPLE SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
  ".academic-card, .news-card, .feature, .quick-card"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  revealObserver.observe(element);
});