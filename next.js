alert("Welcome to the Bubble Game. Get as many bubbles as you can in 10 seconds. Good luck!");

let timer = 10;
let score = 0;
let hitrn = 0;
let timerint = "";

// Function to increase the score
function increaseScore() {
    score += 10;
    document.querySelector("#scorVal").textContent = score;
}

// Function to generate a new target number
function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#Hitval").textContent = hitrn;
}

// Function to create bubbles with random numbers
function MakeBubble() {
    let bubble = "";
    for (let i = 0; i < 108; i++) {
        let rn = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".Pbottom").innerHTML = bubble;
}


// Function to 
if (score === 0) {
    document.querySelector(".Pbottom").innerHTML = `<h1 class="game-over">You Lost!</h1><h2>Better luck next time!</h2><h4>Score: ${score}</h4>`;
} else {
    document.querySelector(".Pbottom").innerHTML = `<h1 class="game-over"> Game Over </h1>Good one <h3>  <h4>Score: ${score}</h4>`;
}



// Celebrate if the score is greater than 10
if (score >= 10) {
    celebrate();
}


// Timer function
function runTimer() {
    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            gameOver();  // Call game over when time runs out
        }
    }, 1000);
}


// Handle bubble clicks
document.querySelector(".Pbottom").addEventListener("click", function (details) {
    if (details.target.classList.contains('bubble')) {
        let clicknum = Number(details.target.textContent);
        if (clicknum === hitrn) {
            increaseScore();
            getNewhit();
            MakeBubble();
        }
    }
});


function gameOver() {
    const playAgainButton = document.querySelector("#playAgain");

    if (score === 0) {
        document.querySelector(".Pbottom").innerHTML = `<h1 class="game-over">You Lost!</h1><h2>Better luck next time!</h2><h4>Score: ${score}</h4>`;
    } else {
        document.querySelector(".Pbottom").innerHTML = `<h1 class="game-over">Game Over</h1><h4>Score: ${score}</h4>`;
    }

    // // Show the "Play Again" button
    // if (playAgainButton) {
    //     playAgainButton.style.display = 'block';
    //     console.log("Play Again button is now visible.");  // Debugging message
    // } else {
    //     console.error("Play Again button is not found in the DOM.");
    // }

    // Celebration if the score is more than 10
    if (score >=10) {
        celebrate();
    }
}

function restartGame() {
    timer = 10;
    score = 0;
    document.querySelector("#scorVal").textContent = score;
    document.querySelector("#timerval").textContent = timer;
    document.querySelector("#playAgain").style.display = 'none';  // Hide "Play Again" button when restarting the game
    MakeBubble();
    runTimer();
    getNewhit();
}


MakeBubble();
runTimer();
getNewhit();
