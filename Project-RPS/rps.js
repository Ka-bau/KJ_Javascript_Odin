function getComputerChoice (){
    const choices = ['rock','paper','scissors']
    const computerChoice = Math.floor(Math.random(choices) * 3);
    const playedChoice = choices[computerChoice];

    console.log(playedChoice);
}

function getHumanChoice (){
    let humanChoice = prompt('Please enter your choice');
    console.log(humanChoice);
}
