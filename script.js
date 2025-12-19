


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


function detectWin(score1, score2) {
    const bodynode = document.querySelector("body");
    const winnode = document.createElement("h2");

    if (score1 > 5) {
        winnode.textContent = "Human has greater than 5 points. He wins!";
        bodynode.appendChild(winnode);
        
    } else if (score2 > 5) {
        winnode.textContent = "Computer has greater than 5 points. Computer wins!"
        bodynode.appendChild(winnode);

    }
}

function playmessages(hselection, cselection) {
    const bodynode = document.querySelector("body");
    

    const hmessage = document.createElement("p");
    const cmessage = document.createElement("p");

    hmessage.textContent = "Human played " + hselection;
    cmessage.textContent = "Computer played " + cselection;
    bodynode.appendChild(hmessage);
    bodynode.appendChild(cmessage);
}



function showscores(hscore, cscore) { 
     const bodynode = document.querySelector("body");
    

    const hmessage = document.createElement("p");
    const cmessage = document.createElement("p");

    hmessage.textContent = "Here is the human score: " + hscore;
    cmessage.textContent = "Here is the computer score: " + cscore;
    bodynode.appendChild(hmessage);
    bodynode.appendChild(cmessage);



}

function playGame() {

   
    /*
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Human played " + humanSelection);
        console.log("Computer played " + computerSelection);
        let message = playRound(humanSelection, computerSelection);
        console.log("Here is the human score: " + humanScore);
        console.log("Here is the computer score: " + computerScore);
        console.log(message);

        */
}

let humanchoice;
let humanScore = 0;
let computerScore = 0;



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener('click', (event) => {
    let choice = getComputerChoice();
    playmessages("rock", choice);
    let message = playRound("rock", choice);



    showscores(humanScore, computerScore);
    detectWin(humanScore, computerScore);



});

paper.addEventListener('click', (event) => {
    let choice = getComputerChoice();
    playmessages("paper", choice);
    let message = playRound("paper", choice);


    showscores(humanScore, computerScore);
    detectWin(humanScore, computerScore);
    
    

});


scissors.addEventListener('click', (event) => {
    let choice = getComputerChoice();
    playmessages("scissors", choice);
    let message = playRound("scissors", choice);
    
    showscores(humanScore, computerScore);
    detectWin(humanScore, computerScore);


});
