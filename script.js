const game = () => {
    let pScore = 0
    let cScore =0

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        });
    };

    // o jogo em si
const playMatch = () => {
const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands img");

hands.forEach(hand => {
    hand.addEventListener("animationend", function() {
    this.style.animation = "";
    });
});
//opçoes do computador
const computerOptions = ["rock", "paper", "scissors"];

options.forEach(option => {
    option.addEventListener("click", function() {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];

    setTimeout(() => {
        compareHands(this.textContent, computerChoice);
    
        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;
    }, 2000);
// animação
    playerHand.style.animation = "shakePlayer 1s ease";
    computerHand.style.animation = "shakeComputer 1s ease";
    });
});
};

const updateScore = () => {
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");
playerScore.textContent = pScore;
computerScore.textContent = cScore;
};

const compareHands = (playerChoice, computerChoice) => {
const winner = document.querySelector(".winner");

// se empatar
if (playerChoice === computerChoice) {
    winner.textContent = "Empate";
    return;
}
//se rock
if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
    winner.textContent = "Venceu";
    pScore++;
    updateScore();
    return;
    } else {
    winner.textContent = "Perdeu";
    cScore++;
    updateScore();
    return;
    }
}
//se paper
if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
    winner.textContent = "Perdeu";
    cScore++;
    updateScore();
    return;
    } else {
    winner.textContent = "Venceu";
    pScore++;
    updateScore();
    return;
    }
}
//se scissors
if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
    winner.textContent = "Perdeu";
    cScore++;
    updateScore();
    return;
    } else {
    winner.textContent = "Venceu";
    pScore++;
    updateScore();
    return;
    }
}
};

 //chamando as funçoes

    startGame();
    playMatch();
};

game();