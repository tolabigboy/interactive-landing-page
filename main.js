"use strict";
console.log("hello");
const numberBtns = document.querySelector(".number-Btns");
const numberBtn = document.querySelectorAll(".number-btn");
const submitBtn = document.querySelector(".submit-btn");
const thankYouApp = document.querySelector(".thank--you__App");
const selectReviewNum = document.querySelector(".selection");
const appTab = document.querySelector(".app-tab");
const h1 = document.querySelector("h1");

const displayThankYouApp = function () {
  numberBtn.forEach((n, i) => {
    if (n.classList.contains("clicked")) {
      selectReviewNum.textContent = `You selected ${i + 1} out of ${
        numberBtn.length
      } `;
    }
  });
  thankYouApp.classList.remove("hidden");
  appTab.classList.add("hidden");
};

numberBtns.addEventListener("click", function (e) {
  e.preventDefault();
  const clickNumber = e.target.closest("button");
  numberBtn.forEach((n) => n.classList.remove("clicked"));
  console.log(clickNumber);
  if (!clickNumber) return;

  clickNumber.classList.add("clicked");
  submitBtn.addEventListener("click", displayThankYouApp);
});
