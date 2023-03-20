
let color = "blue";
let gridToggle = document.getElementById("gridToggle");
let click = true;


function Boardfunc(size){
    let gridBoard = document.querySelector(".gridboard");
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // This is to clear all the default squares from the grid 
    let square = gridBoard.querySelectorAll("div");
    square.forEach((div) => div.remove());
    let amount = size * size;
    for(let i = 0; i < amount; i++){
        let squares = document.createElement("div");
        gridBoard.append(squares);
        squares.addEventListener("mouseover", colorSquare); 
       
        //This is a function to choose background color of squares
        let backGrdCol = document.querySelector("#boardCol");
        backGrdCol.addEventListener("click", () => {
            let bacColor = document.querySelector("#backcolin").value;
            squares.style.backgroundColor = bacColor;
        });
        // This is a function for border toggle
        gridToggle.addEventListener("click", ()=> {
            if(squares.style.border === "1px solid black"){
                squares.style.border = "none"
            }else {
                squares.style.border = "1px solid black";
            }
     })
   }  

};
Boardfunc(16);

//This is to set the desired value in the set input
function changeSize(input) {
if (input >= 2 && input <= 100) {
        document.querySelector(".invalid").style.display = "none";
        Boardfunc(input);
    } else {
        document.querySelector(".invalid").style.display = "block";
    }

}

    // This is a function for rainbow color and pen color hovering on the squares
function colorSquare() {
        if(click){
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if (color === 'penColorInp') { 
            let penColIn = document.querySelector("#pencolor").value;
            this.style.backgroundColor = penColIn;
        } else{
            this.style.backgroundColor = color;
           }
        }
    }
    //   This is a function for selection of color of choice
function changeColor(choice) {
    color = choice;
}
  //This function is the clear the drawing board and whte it white again
   function resetBoard(){
    let gridBoard = document.querySelector(".gridboard");
    let square = gridBoard.querySelectorAll("div");
    square.forEach((div) => div.style.backgroundColor = 'white');
   };
//This function is for stopping and continue the drawing on the board
document.querySelector('.gridboard').addEventListener('click', (e) => {
    click = !click;
    if (e.target.tagName != "BUTTON") {
        if (click) {
            document.querySelector('.mode').textContent = "Mode: Drawing";
        } else {
            document.querySelector('.mode').textContent = "Mode: Not Drawing";
        }
    }
});
    

