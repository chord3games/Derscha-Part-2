document.write("<h1>Mini-Golf</h1>");
console.log ("Welcome to Mini-Golf!");


var username = prompt("Welcome to GC mini golf! what is your name?");


if (!username) {
  username = "Please enter your username";
  console.log(username);
}


var holes = prompt(`Hi, ${username}! Would you like to play 3 or 6 holes today?`);


var par = 3;


var totalScore = 0;

if (holes == "3") {
  console.log("You've selected 3 holes today!");
  for (var i = 1; i <= 3; i++) {
    var holePutts = prompt(`How many putts for hole ${i}? (par is ${par})`);
    totalScore += parseInt(holePutts);
  }
} else if (holes == "6") {
  console.log("You've selected 6 holes today!");
  for (var i = 1; i <= 6; i++) {
    var holePutts = prompt(`How many putts for hole ${i}? (par is ${par})`);
    totalScore += parseInt(holePutts);
  }
} else {
  console.log("Invalid number of holes. Please enter either 3 or 6.");
}
var userScore = totalScore - (holes * par);
if (userScore === 0) {
  console.log(`Good game, ${username}. Your total par was: ${userScore}`);
} else if (totalScore > (holes * par)) {
  console.log(`Nice try, ${username}. Your total par was: ${userScore}`);
} else {
  console.log(`Great job, ${username}! Your total par was: ${userScore}`);
}
