let wins = 0;
let ties = 0;
let losses = 0;

// get computer choice of RPS
getComputerChoice() => {
  const arr = ["r", "p", "c"];
  const computerChoice = Math.floor(Math.random() * arr.length);
}
// get user choice of RPS
getUserChoice() =>{
  let userChoice = ""
  if(document.getElementById('rock').clicked == true){
    userChoice = r;
  } 
  else if(document.getElementById('paper').clicked == true){
    userChoice = p;
  } 
  else if(document.getElementById('scissors').clicked == true){
    userChoice = s;
  } 
  else userChoice = "";
}
// compair computerChoice to userChoice  and increment tally
while (wins<=5 || losses <=5){

  if(getUserChoice() == getComputerChoice()){
    ties++;
    document.getElementById("ties").innerHTML = ties;
    break;
  } 
  else if (getUserChoice()> getComputerChoice()){
    wins++;
    document.getElementById("wins").innerHTML = wins;
    break;
  } 
  else {
    losses++;
    document.getElementById("wins").innerHTML = wins;
  }
}

// winner declared
if (wins == 5){
  document.getElementById(".sTResaults").innerHTML = "User Wins";
}
else if(losses == 5){
  document.getElementById(".sTResaults").innerHTML = "Computer Wins";
}


