let wins = 0;
let ties = 0;
let losses = 0;

const userWins_p = document.getElementById("user-wins");
const ties_p = document.getElementById("ties");
const computerWins_p = document.getElementById("computer-wins");
const restults_p = document.getElementById("results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
  const arr = ["r", "p", "c"];
  const computerChoice = Math.floor(Math.random() * 3);
  return arr[computerChoice];
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
  console.log(wins);
}

function loss(userChoice, computerChoice){
  losses++;
  userWins_p.innerHTML = wins;
  ties_p.innerHTML = ties;
  computerWins_p.innerHTML = losses;
  restults_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice);
  console.log(losses);
}

function tie(){
  ties++;
  userWins_p.innerHTML = wins;
  ties_p.innerHTML = ties;
  computerWins_p.innerHTML = losses;
  restults_p.innerHTML = "Tie!";
  console.log(ties);
}

function game(userChoice) {
  const computerChoice= getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      loss(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie();
      break;
  }
}



// event listeners (not curretly functioning propperly)
function main(){
  rock_div.addEventListener('click',function() {
    game("r");
  })
  paper_div.addEventListener('click',function() {
    game("p");
  })
  scissors_div.addEventListener('click',function() {
    game("s");
  })
}