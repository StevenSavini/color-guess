let colors = generateRandomColors(6);

let squares = document.getElementsByClassName("square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message")
let h1 = document.querySelector("h1");

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
