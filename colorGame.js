let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);

let squares = document.getElementsByClassName("square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
});


resetButton.addEventListener("click", function(){
  // generate all new colors
  colors = generateRandomColors(numberOfSquares);
  // pick a new random color from the array
  pickedColor = pickColor();
  // change colorDisplayto match pickedColor
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
  resetButton.textContent = "New Colors"
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    //compare color to clicked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  })
}

function changeColors(color) {
  //loop through all squares
  for(let i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make array
  let arr = [];
  //put random colors into array
    for (let i = 0; i < num; i++) {
      arr.push(randomColor());
    }
  //return the array
  return arr;
}

function randomColor() {
    //pick a red from 0-255
    let r = Math.floor(Math.random() * 255)
    //pick a green from 0-255
    let g = Math.floor(Math.random() * 255)
    //pick a blue from 0-255
    let b = Math.floor(Math.random() * 255)
    //return the color as a string
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
