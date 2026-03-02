"use strict";

const faqAnswers = document.querySelectorAll(".faq__answer");
const faqIcons = document.querySelectorAll(".faq__icon");
faqIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const checkedAnswer =
      event.target.parentElement.parentElement.querySelector(".faq__answer");
    if (checkedAnswer.classList.contains("active")) {
      checkedAnswer.classList.remove("active");
    } else {
      faqAnswers.forEach((answer) => {
        answer.classList.remove("active");
      });
      checkedAnswer.classList.add("active");
    }
  });
});
