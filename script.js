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
            text.textContent = `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else if(playerSelection == "paper" && computerSelection == "rock"){
            text.textContent = `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else if(playerSelection == "scissors" && computerSelection == "paper"){
            text.textContent = `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else {

            text.textContent = `You Lose !! ${normalizeFirstLetter(playerSelection)} is beaten by ${normalizeFirstLetter(computerSelection)}`;
        }
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

  
function game(){
    if(you > computer){
        console.log("YOU WON THE GAME!!!");
    } else if(computer > you) {
        console.log("YOU LOST THE GAME :(")
    } else
        console.log("IT'S A TIE!!") 
}
  
  game();