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

    // Close all other open items
    const allItems = faqContainer.querySelectorAll(".faq__item");
    allItems.forEach((item) => {
      if (item !== parent) {
        const otherBody = item.querySelector(".faq__body");
        const otherIcon = item.querySelector("span");
        otherBody.classList.remove("faq__body--active");
        otherIcon.classList.remove("icon--active");
      }
    });

    // Toggle the clicked item
    body.classList.toggle("faq__body--active");
    iconContainer.classList.toggle("icon--active");
  }
});
