`use strict`;

let images = document.querySelectorAll(`img`);
let counter = 0;
let firsSelection = ``;
let secondSelection = ``;

const removeClicked = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove(`clicked`);
  }
};
const addCorrect = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add(`correct`);
  }
};
images.forEach((img) =>
  img.addEventListener(`click`, function () {
    img.classList.add(`clicked`);

    if (counter === 0) {
      firsSelection = img.getAttribute(`data-set`);
      counter++;
    } else {
      secondSelection = img.getAttribute(`data-set`);
      counter = 0;
      if (firsSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          `img[data-set=${firsSelection}]`
        );
        removeClicked(correctCards);
        addCorrect(correctCards);
      } else {
        const incorectCards = document.querySelectorAll(`img.clicked`);
        setTimeout(() => {
          removeClicked(incorectCards);
        }, 800);
      }
    }
  })
);
