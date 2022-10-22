/*Add your JavaScript here*/
var morningPersonScore = 0;
var nightOwlScore = 0;

var questionCount = 0

var q1a1 = document.getElementById("q1a1");
q1a1.innerHTML = "Breakfast"
var q1a12= document.getElementById("q1a2");
q1a2.innerHTML = "Dinner"

var q2a1 = document.getElementById("q2a1");
q2a1.innerHTML = "Stay In Bed/ Chill In Bed"
var q2a2 = document.getElementById("q2a2");
q2a2.innerHTML = "Plan/Prioritize Day"

var q3a1 = document.getElementById("q3a1");
q3a1.innerHTML = "Watch a Movie"
var q3a2 = document.getElementById("q3a2");
q3a2.innerHTML = "Clean room/bed"

q1a1.addEventListener("click", morningPerson);
q1a2.addEventListener("click", nightOwl);

q2a1.addEventListener("click", nightOwl);
q2a2.addEventListener("click", morningPerson);

q3a1.addEventListener("click", nightOwl);
q3a2.addEventListener("click", morningPerson);

function morningPerson() {
  questionCount += 1;
  morningPersonScore += 1;
  console.log("questionCount = " + questionCount + "\t" + "dogScore = " + morningPersonScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}
function nightOwl() {
  questionCount += 1;
  nightOwlScore += 1;
  console.log("questionCount = " + questionCount + "\t" + "dogScore = " + nightOwlScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

function updateResult() {
  if (morningPersonScore >= 2) {
    result.innerHTML = "You are a Morning Person!";
    console.log("You are a Morning Person!")
  } else if (nightOwlScore >= 2) {
    result.innerHTML = "You are a Night Owl!";
    console.log("You are a Night Owl!")
  }
}


