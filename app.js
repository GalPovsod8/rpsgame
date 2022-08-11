function getComputerChoice(){
    // const weapon = ['paper', 'rock', 'scissors'];
    // const choice = weapon[Math.floor(Math.random()*weapon.length)]; 
};

    const weapon = ['paper', 'rock', 'scissors'];
    const choice = weapon[Math.floor(Math.random()*weapon.length)];

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'paper' && computerSelection == 'rock')
    {
        console.log('You win! Paper beats rock!');
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors')
    {
        console.log('You win! Rock destroys scissors!');
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper')
    {
        console.log('You win! Scissors cut paper!');
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper')
    {
        console.log('You lose! Paper beats rock!');
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock')
    {
        console.log('You lose! Rock destroys scissors!');
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors')
    {
        console.log('You lose! Scissors cut paper!');
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

playRound(prompt('Enter your weapon of choice: ').toString(), choice); //getComputerChoice() metoda ne dela ko mrs vn dobit sam choice ne cele funckcije
                                                                       //zdaj dela sam ne klice funkcije ampak kr kar je zuna...

// function game(){
//     for(let i = 0; i <= 5; i++)
//     {
        
//     }
// }