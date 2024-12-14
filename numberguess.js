// Select DOM elements
const guessInput = document.getElementById('guessValue');
const guessButton = document.querySelectorAll('.btn')[0];  // First button (Guess button)
const restartButton = document.querySelectorAll('.btn')[1]; // Second button (Restart button)
const counter = document.getElementById('counter');
const hint = document.querySelector('.hint');

// Game variables
let secretNumber = Math.floor(Math.random() * 100) + 1;  
let attempts = 0;  
const maxAttempts = 5;  


function updateHint(message) {
    hint.textContent = message;
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;  
    counter.textContent = attempts;  
    guessInput.value = '';  
    updateHint("*do the first guess to get a hint");  
    guessButton.disabled = false; 
}


function makeGuess() {
    const userGuess = parseInt(guessInput.value);  


    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;  
    counter.textContent = attempts;  

    
    if (userGuess === secretNumber) {
        updateHint(`Congrats! You guessed the number ${secretNumber}.`);  
        guessButton.disabled = true;  
    } else if (attempts >= maxAttempts) {
        updateHint(`Game Over! The correct number was ${secretNumber}.`); 
        guessButton.disabled = true;  
    } else if (userGuess < secretNumber) {
        updateHint("Too low! Try again.");  
    } else {
        updateHint("Too high! Try again.");  
    }
}


guessButton.addEventListener('click', makeGuess);  
restartButton.addEventListener('click', restartGame);  

const generate_number_btn_click=()=>{
    document.querySelector('#section1').style.display = "none";
document.querySelector('#section2').style.display = "none";
document.querySelector('#section3').style.display = "block";


    setTimeout(() => {
        restartGame();
        document.querySelector('#section1').style.display = "none";
document.querySelector('#section2').style.display = "block";
document.querySelector('#section3').style.display = "none";

    },  3000);


    };


