const computerPlays = function(){
    let computerChoice = Math.floor(Math.random() *3)
    if(computerChoice === 0){
        return 'rock';
    } else if(computerChoice === 1){
        return 'paper';
    } else if(computerChoice === 2){
        return 'scissors';
    }
}

const playRound= function(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win!!!';
    } else if(playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You Lose :(';
    } else if(playerSelection === computerSelection){
        return 'It\'s a tie';
    }
};

const playerSelection = prompt();
const computerSelection = computerPlays();
console.log(playRound(playerSelection, computerSelection));

const game = function(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerSelection));
    }
};

