"use strict";

const faqContainer = document.querySelector(".faq__items-wrapper");

faqContainer.addEventListener("click", (e) => {
  // Check if they clicked the title OR the symbol
  if (
    e.target.closest(".faq__title") ||
    e.target.closest(".material-symbols-outlined")
  ) {
    const parent = e.target.closest(".faq__item");
    const body = parent.querySelector(".faq__body");
    const iconContainer = parent.querySelector("span");

    body.classList.toggle("faq__body--active");
    iconContainer.classList.toggle("icon--active");
  }
});
