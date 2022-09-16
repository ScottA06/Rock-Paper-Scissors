//DOM
var userScore = 0;

var computerScore = 0;

const userScoreSpan = document.getElementById("user-score");

const computerScoreSpan = document.getElementById("computer-score");

const scoreBoardDiv = document.querySelector(".score-board");

const resultDiv = document.querySelector(".result > p");

const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorDiv = document.getElementById("s");
//

//main functions
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

getComputerChoice();


function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const userChoiceDiv = document.getElementById(userChoice);
    resultDiv.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
    userChoiceDiv.classList.add('green-glow');
    setTimeout(function () { userChoiceDiv.classList.remove('green-glow') }, 300);
    console.log("YOU WIN!");
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const userChoiceDiv = document.getElementById(userChoice);
    resultDiv.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You lose!";
    userChoiceDiv.classList.add('red-glow');
    setTimeout(function () { userChoiceDiv.classList.remove('red-glow') }, 300);
    console.log("YOU LOSE!");
}

function draw(userChoice, computerChoice) {
    const userChoiceDiv = document.getElementById(userChoice);
    resultDiv.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You draw!";
    userChoiceDiv.classList.add('grey-glow');
    setTimeout(function () { userChoiceDiv.classList.remove('grey-glow') }, 300);
    console.log("YOU DRAW!");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);

            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);

            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);

            break;
    }
}

function main() {
    rockDiv.addEventListener('click', function () {
        game("r")
    })

    paperDiv.addEventListener('click', function () {
        game("p")
    })

    scissorDiv.addEventListener('click', function () {
        game("s")
    })
}

main();