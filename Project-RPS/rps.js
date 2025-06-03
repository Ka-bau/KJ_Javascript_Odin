let humanScore = 0;
let computerScore = 0;

function getHumanChoice (){
    let humanChoice = prompt('Please enter your choice: ');
    return humanChoice.toLowerCase();
}

function getComputerChoice (){
    const choices = ['rock','paper','scissors'];
    const playedChoice = Math.floor(Math.random() * (choices.length));
    const computerChoice = choices[playedChoice];

    return computerChoice;
}

function playRound (){

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    if (humanSelection === computerSelection){
    return 'You draw! No points for each.';

    }else if ((humanSelection === 'rock') && (computerSelection === 'paper')){
        computerScore++;
        return 'You lose! Paper covers rock!';

    }else if ((humanSelection === 'rock') && (computerSelection === 'scissors')){
        humanScore++;
        return 'You win! Rock crushes scissors';

    }else if ((humanSelection === 'paper') && (computerSelection === 'scissors')){
        computerScore++;
        return 'You lose! Scissors cut paper!';

    }else if ((humanSelection === 'paper') && (computerSelection === 'rock')){
        humanScore++;
        return 'You win! Paper covers rock!';

    }else if ((humanSelection === 'scissors') && (computerSelection === 'rock')){
        computerScore++;
        return 'You lose! Rock crushes scissors!';

    }else if ((humanSelection === 'scissors') && (computerSelection === 'paper')){
        humanScore++;
        return 'You win! Scissors cut Paper!';
    }
}

function playGame(playRound){

    let playedRound = 0;
    humanScore = 0;
    computerScore = 0;


    while (playedRound < 5){
        console.log(playRound());
        playedRound++;

        }if (humanScore > computerScore){
            return 'You win with a score of' +' '+humanScore;
        }else if (computerScore > humanScore){
            return 'You lose. Computer wins with a score of'+' '+computerScore;
        }else{
            return 'No winner, both tie';
    }
}
playGame();
