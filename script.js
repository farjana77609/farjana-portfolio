// sticky navbar script
window.addEventListener("scroll", () => {
  const navWrapper = document.querySelector(".nav-wrapper");
  if (window.scrollY >= 80) {
    navWrapper.classList.add("sticky-nav");
  } else {
    navWrapper.classList.remove("sticky-nav");
  }
});

// go to top button script

window.addEventListener("scroll", () => {
  const scrollTopBtn = document.querySelector("#ScrollToTopBtn");
  if (window.scrollY <= 100) {
    scrollTopBtn.classList.add("hidden");
  } else {
    scrollTopBtn.classList.remove("hidden");
  }
});

const swiper = new Swiper(".myProjectsSwiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  // autoplay: {
  //   delay: 1800,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Script to download cv
document.getElementById("downloadCV").addEventListener("click", () => {
  const cvUrl = "./my_cv.pdf";

  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Farzana_CV.pdf"; // filename when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// click to zoom functions
function openModal(src) {
  const modal = document.getElementById("imageModal");
  document.getElementById("modalImage").src = src;
  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("imageModal").classList.remove("show");
}

// custom cursor
new kursor({
  type: 1,
  color: "#00ffff",
  removeDefaultCursor: true,
  speed: 0.3,
});
