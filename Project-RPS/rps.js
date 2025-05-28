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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let playedRound = 0;

        function playRound (){
    
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();

            if (humanSelection === computerSelection){
                computerScore +=0;
                humanScore +=0;
            return 'You draw! No points for each.';

            }else if ((humanSelection === 'rock') && (computerSelection === 'paper')){
                computerScore++;
                return 'You lose! Paper beats rock!';
        
            }else if ((humanSelection === 'rock') && (computerSelection === 'scissors')){
                humanScore++;
                return 'You win! Rock beats scissors';
        
            }else if ((humanSelection === 'paper') && (computerSelection === 'scissors')){
                computerScore++;
                return 'You lose! Scissors beats paper!';
        
            }else if ((humanSelection === 'paper') && (computerSelection === 'rock')){
                humanScore++;
                return 'You win! Paper beats rock!';
        
            }else if ((humanSelection === 'scissors') && (computerSelection === 'rock')){
                computerScore++;
                return 'You lose! Rock beats scissors!';
        
            }else if ((humanSelection === 'scissors') && (computerSelection === 'paper')){
                humanScore++;
                return 'You win! Scissors beats Paper!';
            }
        }

    while (playedRound < 5){
        console.log(playRound());
        playedRound++;

        }if (humanScore > computerScore){
            return 'You win with a score of' +''+humanScore;
        }else if (computerScore > humanScore){
            return 'You lose. Computer wins with a score of'+''+computerScore;
        }else{
            return 'No winner, both tie';
    }
}