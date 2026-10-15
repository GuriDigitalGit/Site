const videoCard = document.querySelector(".video-card");
const modal = document.querySelector(".video-modal");
const closeButton = document.querySelector(".modal-close");

function openModal() {
  if (!modal || !closeButton) return;
  modal.hidden = false;
  closeButton.focus();
}

function closeModal() {
  if (!modal || !videoCard) return;
  modal.hidden = true;
  videoCard.focus();
}

if (videoCard && modal && closeButton) {
  videoCard.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateScrollState() {
  const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = window.scrollY / max;
  const heroProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);

  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
  document.documentElement.style.setProperty("--hero-parallax", heroProgress.toFixed(4));
}

if (!motionQuery.matches) {
  const revealTargets = document.querySelectorAll(
    ".case-section, .compare-section, .deliverables-section, .scenes-section, .friction-section, .studio-section, .method-section, .audience-section, .faq-section, .deliverable-card, .table-row, .method-list li, .scene, .still"
  );

  revealTargets.forEach((target) => target.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px 18% 0px" }
  );

  revealTargets.forEach((target) => observer.observe(target));

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
  window.addEventListener("resize", updateScrollState);
}
