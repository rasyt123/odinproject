


function getComputerChoice() {

    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice === 0) {
        return "rock";
    } else if (compChoice === 1) {
        return "paper";
    } else { 
        return "scissors";
    }
}


let getHumanChoice = () => {
    let humanchoice = prompt("Select your choice.");
    return humanchoice;
}


function playRound(humanChoice, computerChoice) {

    let playerchoice = humanChoice.toLowerCase();
    let botchoice = computerChoice.toLowerCase();

    
    if (playerchoice === botchoice) {
        humanScore += 1;
        computerScore += 1;
        return "tie";
    }


    if (playerchoice === "rock" && botchoice === "scissors"
        || playerchoice === "paper" && botchoice === "rock" ||
        playerchoice ==="scissors" && botchoice ==="paper"
    ) {
        humanScore += 2;
        return "human won";
    }

    computerScore += 2;
    return "bot won";
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Human played " + humanSelection);
        console.log("Computer played " + computerSelection);
        let message = playRound(humanSelection, computerSelection);
        console.log("Here is the human score: " + humanScore);
        console.log("Here is the computer score: " + computerScore);
        console.log(message);
        console.log(`Round ${i + 1}`);
    }
}


 
let humanScore = 0;
let computerScore = 0;

playGame();
