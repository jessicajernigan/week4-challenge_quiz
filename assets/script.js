var startBtn = document.querySelector("#start-btn");
var viewHighScoresBtn = document.querySelector("#highscores-btn")
var index = 0;
var score = 0;


// The array of questions for our quiz game.
var questions = [
  { q: "Which pet is the best?", a1: "Baasha", a2: "Cooper", a3: "Fred", a4: "Trick question; all of the above.", correct: "a4" },
  { q: "What is the minimum amount of sleep required by 99.9999% of the human population?", a1: "7+ hours", a2: "6 hours", a3: "5 hours", a4: "4 hours", correct: "a1"},
];


// COUNTDOWN TIMER FUNCTION
function quizTimer() {
  var timeLeft = 20;
  var timeInterval = setInterval(function () {
    timer.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === -1) {
      timer.textContent = "";
      clearInterval(timeInterval)
      // Call function that 1.) hides questions 2.) displays score + input field requesting initials 
    }
  }, 1000);

  document.getElementById("intro-section").style.display = "none";
  quizQuestions(index);
};

// INITIATES THE FIRST QUESTION.
function quizQuestions(index) {
  document.getElementById("quiz-content").style.display = "inline-block";
    var q = document.getElementById("question");
    q.textContent = questions[index].q;

    var answer1 = document.getElementById("answer1");
    answer1.textContent = questions[index].a1;

    var answer2 = document.getElementById("answer2");
    answer2.textContent = questions[index].a2;

    var answer3 = document.getElementById("answer3");
    answer3.textContent = questions[index].a3;
    
    var answer4 = document.getElementById("answer4");
    answer4.textContent = questions[index].a4;
  
    var btns = [answer1, answer2, answer3, answer4];

    var answerCheck = function (e) {
      if (e.target.textContent = questions[index][questions[index].correct])
      {
        quizQuestions(index + 1);
      }
      else {
        timer - 10
      }

      for (var i = 0; i < btns.length; i++) {
        btns[i].removeEventListener("click", answerCheck);
      }
    }

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", answerCheck);
    }
};


function showInputContainer() {
  document.getElementById("input-container").style.display = "inline-block";
}

function showLeaderboard() {
  document.getElementById("leaderboard").style.display = "inline-block";
  document.getElementById("intro-section").style.display = "none";
  document.getElementById("input-container").style.display = "none";
}





// 1. Check for incorrect answer, then subtract time from 'timer'
// 2. Stop quiz, go to form input (to get initials)
// 3. Submission populates high scores (localStorage)

startBtn.addEventListener("click", quizTimer); // Removes introductory text and starts the timer.
viewHighScoresBtn.addEventListener("click", showLeaderboard)







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

