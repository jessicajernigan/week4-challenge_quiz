var startBtn = document.querySelector("#start-btn");
var viewHighScoresBtn = document.querySelector("#highscores-btn");
var index = 0;
var score = 0;
var timeLeft = 60;
var totalQuestions = 2;
var inputField = document.querySelector("#initials-field");
var submitBtn = document.querySelector("#sign-up");

// The array of questions for our quiz game.
var questions = [
  {
    q: "What is an alert()?",
    a1: "A feature that alerts the developer when she's made a mistake.",
    a2: "A function that prints 'alert' on the page.",
    a3: "A custom variable that stores multiple boolean values.",
    a4: "A function built into the browser that allows the developer to send messages to the user.",
    correct: "a4",
  },
  {
    q:
      "What does a plus sign (+) do?",
    a1: "Contatenate strings",
    a2: "Produce sums",
    a3: "Concatenate strings or produce sums, depending on the context.",
    a4: "Trick question! Plus signs are never used in JavaScript.",
    correct: "a3",
  },
  {
    q:
      "What is the significance of semicolons (;) in JavaScript?",
    a1: "They are a 'terminator,' alerting the browser that a particular line is complete and that any code after it is a new expression.",
    a2: "They alert the browser to break out of the current function if a preceding value is false.",
    a3: "They do not have a purpose; using them is entirely up to personal preference!",
    a4: "They are used to create comments in a .js file.",
    correct: "a1",
  },
  {
    q:
      "What insignia is used to verify whether two values are directly equal to one another?",
    a1: "-=",
    a2: "===",
    a3: "/* */",
    a4: "||",
    correct: "a2",
  },
  {
    q:
      "Define null.",
    a1: "The absence of a value.",
    a2: "A slang term for a boring function. Try to spruce it up!",
    a3: "A value less than zero.",
    a4: "A negative value.",
    correct: "a1",
  },
];

// COUNTDOWN TIMER FUNCTION
function quizTimer() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds remaining";

    if (timeLeft <= 0) {
      timer.textContent = "";
      clearInterval(timeInterval);
      // Call function that 1.) hides questions 2.) displays score + input field requesting initials
    }
  }, 1000);

  document.getElementById("intro-section").style.display = "none";
  quizQuestions(index);
}

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
    var correct = document.getElementById("right-wrong");
    correct.textContent = " ";
    if (e.target.textContent == questions[index][questions[index].correct]) {
      score++
      correct.textContent = "Correct!"
      console.log(score);
      if (!(index >= questions.length - 1)) {
        quizQuestions(index + 1)
      } else {
        showInputContainer();
      }
    }

    else {
      // subtract ten and assign the new value to the timer variable
      timeLeft -= 10
      correct.textContent = "Incorrect :("
      if (!(index >= questions.length - 1)) {
        quizQuestions(index + 1)
      } else {
        showInputContainer();
      }
    }

    for (var i = 0; i < btns.length; i++) {
      btns[i].removeEventListener("click", answerCheck);
    }
  };

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", answerCheck);
  }

};

function showInputContainer() {
  document.getElementById("input-container").style.display = "inline-block";

  if (score > 3) {
    document.getElementById("your-score").textContent = "You got " + score + " out of " + questions.length + " questions correct. Nice work!";
  } else {
    document.getElementById("your-score").textContent = "You got " + score + " out of " + questions.length + " questions correct. Study up and try again soon!";
  }

  document.getElementById("leaderboard").style.display = "none";
  document.getElementById("intro-section").style.display = "none";
  document.getElementById("quiz-content").style.display = "none";
  document.getElementById("timer-div").style.display = "none";
};



function showLeaderboard() {
  document.getElementById("leaderboard").style.display = "inline-block";
  document.getElementById("intro-section").style.display = "none";
  document.getElementById("input-container").style.display = "none";
  document.getElementById("quiz-content").style.display = "none";
  document.getElementById("timer-div").style.display = "none";
};


viewHighScoresBtn.addEventListener("click", showLeaderboard);
startBtn.addEventListener("click", quizTimer); // Removes introductory text and starts the timer.
submitBtn.addEventListener("click", function (event) {
  event.preventDefault()
  var initials = document.querySelector("#initials-field").value;
  
  if (initials === "") {
    displayMessage("error", "Please enter your initials.");
  } else {
    localStorage.setItem("initials", initials);
    showLeaderboard();
  }

});

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
