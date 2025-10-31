function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".custom-slides");
  const dots = document.querySelectorAll(".custom-dot");
  const next = document.querySelector(".custom-next");
  const prev = document.querySelector(".custom-prev");
  const totalSlides = document.querySelectorAll(".custom-slide").length;
  let index = 0;

  function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === i));
  }

  next.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  // Auto-slide (optional)
  setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }, 5000);
});
