let wins = 0;
let ties = 0;
let losses = 0;

const userWins_p = document.getElementById("user-wins");
const ties_p = document.getElementById("ties");
const computerWins_p = document.getElementById("computer-wins");
const restults_p = document.querySelector(".sTResults");
const rock_input = document.getElementById("r");
const paper_input = document.getElementById("p");
const scissors_input = document.getElementById("s");


function getComputerChoice() {
  const arr = ["r", "p", "c"];
  const computerChoice = Math.floor(Math.random() * 3);
  return arr
}

function convertToWord(letter){
  if (letter == "r") return "Rock";
  else if (letter == "p") return "paper";
  else return "scissors";

}

function win(userChoice, computerChoice){
  wins++;
  userWins_p.innerHTML = wins;
  ties_p.innerHTML = ties;
  computerWins_p.innerHTML = losses;
  restults_p.innerHTML =convertToWord(userChoice) + " beats " + convertToWord(computerChoice);
}

function loss(userChoice, computerChoice){
  losses++;
  userWins_p.innerHTML = wins;
  ties_p.innerHTML = ties;
  computerWins_p.innerHTML = losses;
  restults_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice);
}

function tie(){
  ties++;
  userWins_p.innerHTML = wins;
  ties_p.innerHTML = ties;
  computerWins_p.innerHTML = losses;
  restults_p.innerHTML = "Tie!";
}

function game(userChoice) {
  const computerChoice= getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win();
      break;
    case "rp":
    case "ps":
    case "sr":
      loss();
      break;
    case "rr":
    case "pp":
    case "ss":
      tie();
      break;
  }
}

function main (){
  rock_input.addEventListener('click',function() {
    game("r");
  })
  paper_input.addEventListener('click',function() {
    game("");
  })
  scissors_input.addEventListener('click',function() {
    game("s");
  })
}

// compair computerChoice to userChoice  and increment tally
/*while (wins<=5 || losses <=5){

  if(getUserChoice() == getComputerChoice()){
    ties++;
    ties_p.innerHTML=ties;
    break;
  } 
  else if (getUserChoice()> getComputerChoice()){
    wins++;
    userWins_p.innerHTML = wins;
    break;
  } 
  else {
    losses++;
    computerWins_p.innerHTML = losses;
  }
}*/

// winner declared
/*if (wins == 5){
  document.getElementById(".sTResaults").innerHTML = "User Wins";
}
else if(losses == 5){
  document.getElementById(".sTResaults").innerHTML = "Computer Wins";
}*/