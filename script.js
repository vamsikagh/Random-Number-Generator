const rollButton = document.getElementById("rollButton");
const myLabel = document.getElementById("myLabel");
const max = 1000;
const min = 1;

rollButton.onclick = function () {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  myLabel.textContent = randomNum;
};
