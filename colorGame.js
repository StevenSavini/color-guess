let numberOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.getElementsByClassName("square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.getElementsByClassName("mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  // modeButtons event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
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
    });
  }
}

function reset(){
  colors = generateRandomColors(numberOfSquares);
  // pick a new random color from the array
  pickedColor = pickColor();
  // change colorDisplayto match pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
  this.textContent = "New Colors"
});

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++){
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
