let you = 0, computer = 0;

function getComputerChoice(min = 0, max=3){
    let choice = Math.floor(Math.random() * (max - min) ) + min;
    if(choice == 0){
        return "rock";
    } else if(choice == 1) {
        return "paper";
    } else
        return "scissors";
}
  
function normalizeLowerCase(text){
    return text.toLowerCase();
}
  
function normalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    let text = document.querySelector('#text');
    if(playerSelection == computerSelection){
        text.textContent = `Both Lose !! ${normalizeFirstLetter(playerSelection)} equals to ${normalizeFirstLetter(computerSelection)}`;
    } else {
        if(playerSelection == "rock" && computerSelection == "scissors"){
            you++;
            text.textContent = `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else if(playerSelection == "paper" && computerSelection == "rock"){
            you++;
            text.textContent = `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else if(playerSelection == "scissors" && computerSelection == "paper"){
            you++;
            text.textContent = `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else {
            computer++;
            text.textContent = `You Lose !! ${normalizeFirstLetter(playerSelection)} is beaten by ${normalizeFirstLetter(computerSelection)}`;
        }
    }
    if(you == 5 || computer == 5){
        if(you > computer){
            text.textContent = "YOU WON THE GAME!!!";
        } else if(computer > you) {
            text.textContent = "YOU LOST THE GAME :(";
        }
        you = 0, computer=0;
    } 
    
}

let buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', ()=>{
    playRound('rock', getComputerChoice());
})

let buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', ()=>{
    playRound('paper', getComputerChoice());
})

let buttonScissors = document.querySelector('#scissors');
buttonScissors.addEventListener('click', ()=>{
    playRound('scissors', getComputerChoice());
})