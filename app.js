function getComputerChoice(){
    console.log('rock');
    console.log('paper');
    console.log('scissors');
};

getComputerChoice();

function game(playerSelection, computerSelection){
    if(playerSelection == computerSelection)
    {
        console.log('draw');
    }

    console.log('You lose! Paper beats rock');
};