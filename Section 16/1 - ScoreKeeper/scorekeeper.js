var h1 = document.querySelector("h1");
var winningScoreDisplay = document.querySelector("#wsDisplay");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("input[type='number']")

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

numInput.addEventListener("click", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = parseInt(this.value);
});

p1Button.addEventListener("click", function(){
    func("p1", p1Display);
});

p2Button.addEventListener("click", function(){
    func("p2", p2Display);
});

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");

    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");

    gameOver = false;

});


function func(score, display){
    if( !gameOver ){
        score === "p1"? p1Score++ : p2Score++;
        controlGame();
        
        display.id == "p1Display"? 
            display.textContent = p1Score : 
            display.textContent = p2Score;

    }
}

function controlGame(){
    if(p1Score === winningScore){
        gameOver = true;
        p1Display.classList.add("winner");
    }
    if(p2Score === winningScore){
        gameOver = true;
        p2Display.classList.add("winner");
    }
}
