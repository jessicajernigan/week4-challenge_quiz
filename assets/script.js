var startBtn = document.querySelector("#start-btn");



// The array of questions for our quiz game.
var questions = [
  { q: "What is the best animal?", a1: "Wolves", a2: "Dogs", a3: "Bears", a4: "Trick question; all of the above" },
  { q: "What is the minimum amount of sleep required by 99.9999% of the human population?", a1: "7+ hours", a2: "6 hours", a3: "5 hours", a4: "4 hours" },
];


// COUNTDOWN TIMER FUNCTION
function quizTimer() {
  var timeLeft = 10;
  var timeInterval = setInterval(function () {
    timer.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === -1) {
      timer.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);

  document.getElementById("intro-section").style.display = "none";
  quizQuestions();
}

// INITIATES THE FIRST QUESTION.
function quizQuestions() {
  document.getElementById("quiz-content").style.display = "inline-block";
  
    var q = document.getElementById("question");
    q.innerHTML = questions.q;
    var answer1 = document.getElementById("answer1");
    answer1.innerHTML = questions.a1;
    var answer2 = document.getElementById("answer2");
    answer2.innerHTML = questions.a2;
    var answer3 = document.getElementById("answer3");
    answer3.innerHTML = questions.a3;
    var answer4 = document.getElementById("answer4");
    answer4.innerHTML = questions.a4;
  
}



startBtn.addEventListener("click", quizTimer); // Removes introductory text and starts the timer.








// User Story
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers


// Acceptance Criteria
// GIVEN I am taking a code quiz 
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

