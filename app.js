function getComputerChoice(){
    weapon = ['paper', 'rock', 'scissors'];
    return weapon[Math.floor(Math.random()*weapon.length)]; 
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'paper' && computerSelection == 'rock')
    {
        console.log('You win! Paper beats rock!');
        playerScore++;
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors')
    {
        console.log('You win! Rock destroys scissors!');
        playerScore++;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper')
    {
        console.log('You win! Scissors cut paper!');
        playerScore++;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper')
    {
        console.log('You lose! Paper beats rock!');
        computerScore++;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock')
    {
        console.log('You lose! Rock destroys scissors!');
        computerScore++;
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors')
    {
        console.log('You lose! Scissors cut paper!');
        computerScore++;
    }
    else if(playerSelection == computerSelection)
    {
        console.log("IT'S A DRAW");
    }
    else if(playerSelection && computerSelection != 'paper' || 'rock' || 'scissors')
    {
        console.log('ERROR! Invalid input.');
    }
}

function game(){
    for(let round = 0; round <= 5; round++)
    {
        playRound(prompt('Enter your weapon of choice: ').toString(), getComputerChoice());
    }
    
    if(playerScore > computerScore)
    {
        console.log('YOU WIN THE GAME!');
    }
    else if(playerScore < computerScore)
    {
        console.log('YOU LOSE THE GAME!');
    }
    else if(playerScore == computerScore)
    {
        console.log('THE GAME IS A TIE!');
    }
}

game();