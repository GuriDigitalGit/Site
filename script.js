const videoCard = document.querySelector(".video-card");
const modal = document.querySelector(".video-modal");
const closeButton = document.querySelector(".modal-close");

function openModal() {
  modal.hidden = false;
  closeButton.focus();
}

function closeModal() {
  modal.hidden = true;
  videoCard.focus();
}

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
