const inputLeft = document.getElementById("input-left");
const inputRight = document.getElementById("input-right");

const thumpLeft = document.querySelector(".slider> .thumb.left");
const thumpRight = document.querySelector(".slider> .thumb.right");
const range = document.querySelector(".slider > .range");
const track = document.querySelector(".slider > .track");

const priceLeft = document.querySelector(".price-left");
const priceRight = document.querySelector(".price-right");

function setLeftValue() {
  const thump = inputLeft;
  let max = parseInt(thump.max);
  thump.value = Math.min(parseInt(thump.value), parseInt(inputRight.value) - 1);

  let present = (thump.value / max) * 100;
  thumpLeft.style.left = present + "%";
  range.style.left = present + "%";
  priceLeft.innerHTML = thump.value;
}

setLeftValue();

function setRightValue() {
  const thump = inputRight;
  let max = parseInt(thump.max);
  thump.value = Math.max(parseInt(thump.value), parseInt(inputLeft.value) + 1);

  let present = (thump.value / max) * 100;
  thumpRight.style.right = 100 - present + "%";
  range.style.right = 100 - present + "%";
  priceRight.innerHTML = parseInt(thump.value);
}

setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);
