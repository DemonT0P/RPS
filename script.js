function getComputerChoice(min = 0, max=3){
    let choice = Math.floor(Math.random() * (max - min) ) + min;
    if(choice == 0){
        return "Rock";
    } else if(choice == 1) {
        return "Paper";
    } else
        return "Scissors";
  }
  
function normalizeLowerCase(text){
    return text.toLowerCase();
}
  
function normalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    playerSelection = normalizeLowerCase(playerSelection);
    computerSelection = normalizeLowerCase(computerSelection);
    if(playerSelection == computerSelection){
        return `Both Lose !! ${normalizeFirstLetter(playerSelection)} equals to ${normalizeFirstLetter(computerSelection)}`;
    } else {
        if(playerSelection == "rock" && computerSelection == "scissors"){
            return `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else if(playerSelection == "paper" && computerSelection == "rock"){
            return `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else if(playerSelection == "scissors" && computerSelection == "paper"){
            return `You Win !! ${normalizeFirstLetter(playerSelection)} beats ${normalizeFirstLetter(computerSelection)}`;
        } else {
            return `You Lose !! ${normalizeFirstLetter(playerSelection)} is beaten by ${normalizeFirstLetter(computerSelection)}`;
        }
    }
}
  
function game(){
    let playerSelection;
    let you = 0, computer = 0;
    for(let i = 0; i<5; i++){
        playerSelection = window.prompt("Choose your hand")
        let game = playRound(playerSelection, getComputerChoice());
        console.log(game);
        let results = game.substring(0, game.indexOf(" !!"));
        if(results == "You Win"){
            you++;
        } else if(results=="You Lose"){
            computer++;
        }
    }
    if(you > computer){
        console.log("YOU WON THE GAME!!!");
    } else if(computer > you) {
        console.log("YOU LOST THE GAME :(")
    } else
        console.log("IT'S A TIE!!")
  }
  
  game();