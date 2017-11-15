
var numOfsquares = 6;
var colors = generateRandomColor(numOfsquares);

var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#resetButton");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");



colorDisplay.textContent = pickedColor;




var squares = document.querySelectorAll(".square")

for(var i = 0; i < squares.length; i ++){
    squares[i].style.backgroundColor = colors[i]
    //add click listeners to squares
    squares[i].addEventListener("click" , function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Corrent!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}


reset.addEventListener("click", function(){
   //generate all new colours
    colors = generateRandomColor(numOfsquares);
    //pick a new random colour
    pickedColor = pickColor();
    //change colourDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change the colours of the square
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfsquares = 3;
    colors = generateRandomColor(numOfsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfsquares = 6;
    colors = generateRandomColor(numOfsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++){
        
            squares[i].style.backgroundColor = colors[i];
        
            squares[i].style.display = "block";
        
    }
})
