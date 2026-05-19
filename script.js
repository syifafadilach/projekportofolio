const links = document.querySelectorAll(".nav-menu a");
const indicator = document.querySelector(".indicator");



window.addEventListener("load", () => {
  const active = document.querySelector(".nav-menu a.active");

  if (active) {
    indicator.style.opacity = "1";
    indicator.style.width = active.offsetWidth + "px";
    indicator.style.left = active.offsetLeft + "px";
  }
});

// saat klik menu
links.forEach(link => {
  link.addEventListener("click", () => {

    indicator.style.opacity = "1";
    indicator.style.width = link.offsetWidth + "px";
    indicator.style.left = link.offsetLeft + "px";

  });
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


const text = "Frontend Developer";
let index = 0;
const speed = 80;

function typeEffect() {

  if (index < text.length) {

    document.querySelector(".typing").textContent += text.charAt(index);

    index++;

    setTimeout(typeEffect, speed);
  }
}

window.addEventListener("load", typeEffect);



const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    tab.classList.add("active");

    document
      .getElementById(tab.dataset.tab)
      .classList.add("active");

  });

});




const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const el = entry.target;
      const delay = el.getAttribute("data-delay") || 0;

      setTimeout(() => {

        el.classList.add("show");

        // progress bar animation
        const bars = el.querySelectorAll(".progress div");

        bars.forEach(bar => {

          const width = bar.getAttribute("data-width");

          bar.style.width = width;

        });

      }, delay);

      observer.unobserve(el);

    }

  });

}, {
  threshold: 0.2
});


// target reveal
document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});


const elements = document.querySelectorAll(".cyfa-hidden");

function showOnScroll() {

  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {

      el.classList.add("cyfa-show");

    }

  });

}

window.addEventListener("scroll", showOnScroll);

showOnScroll();


function openContact() {

  document
    .getElementById("contactPanel")
    .classList.add("active");

}

function closeContact() {

  document
    .getElementById("contactPanel")
    .classList.remove("active");

}



document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    document.getElementById("successMsg").style.display = "block";

    this.reset();

  });