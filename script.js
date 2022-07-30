`use strict`;

let images = document.querySelectorAll(`img`);
let firsSelection = ``;
let counter = 0;
let secondSelection = ``;
let clickedImages = [];

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
    if (counter ===3) counter = 0;

    if (counter === 0) {
      clickedImages.push(img);
      firsSelection = img.getAttribute(`data-set`);
      counter++;
    } else {
      clickedImages.push(img);
      secondSelection = img.getAttribute(`data-set`);
      counter = 0;
      if (firsSelection === secondSelection && (clickedImages[0] !== clickedImages[1])) {
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
      clickedImages = []
    }
  })
);

