const wins = 0;
const ties = 0;
const losses = 0;
const userWins_p = document.getElementById("user-wins");
const ties_p = document.getElementById("ties");
const computerWins_p = document.getElementById("computer-wins");
const restults_p = document.querySelector(".sTResults");
const rock_input = document.getElementById("r");
const paper_input = document.getElementById("p");
const scissors_input = document.getElementById("s");


// get computer choice of RPS
function getComputerChoice() {
  const arr = ["r", "p", "c"];
  const computerChoice = Math.floor(Math.random() * arr.length);
}
// get user choice of RPS
function getUserChoice() {
  let userChoice = ""
  if(rock_input.clicked == true){
    userChoice = r;
  } 
  else if(paper_input.clicked == true){
    userChoice = p;
  } 
  else if(scissors_input.clicked == true){
    userChoice = s;
  } 
  else userChoice = "";
}
// compair computerChoice to userChoice  and increment tally
while (wins<=5 || losses <=5){

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
}

// winner declared
if (wins == 5){
  document.getElementById(".sTResaults").innerHTML = "User Wins";
}
else if(losses == 5){
  document.getElementById(".sTResaults").innerHTML = "Computer Wins";
}


