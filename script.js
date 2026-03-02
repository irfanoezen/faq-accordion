"use strict";

const faqAnswers = document.querySelectorAll(".faq__answer");
const faqIcons = document.querySelectorAll(".faq__icon");
faqIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const checkedAnswer =
      event.target.parentElement.parentElement.querySelector(".faq__answer");
    if (checkedAnswer.classList.contains("active")) {
      checkedAnswer.classList.remove("active");
      event.target.setAttribute("src", "assets/images/icon-plus.svg");
    } else {
      faqAnswers.forEach((answer) => {
        answer.classList.remove("active");
        faqIcons.forEach((icon) => {
          icon.setAttribute("src", "assets/images/icon-plus.svg");
        });
      });
      checkedAnswer.classList.add("active");
      event.target.setAttribute("src", "assets/images/icon-minus.svg");
    }
  });
});
