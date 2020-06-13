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


///       // The array of questions for our quiz game.
var questions = [
  { q: 'The sky is blue.', a: 't' },
  { q: 'There are 365 days in a year.', a: 't' },
  { q: 'There are 42 ounces in a pound.', a: 'f' },
  { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
  { q: 'Bananas are vegetables.', a: 'f' },
];

// We start the game with a score of 0. (Won't need this probably.)
var score = 0;

// Loop over every question object
for (var i = 0; i < questions.length; i++) {
  // Display current question to user and ask OK/Cancel
  var answer = confirm(questions[i].q);

  // Compare answers
  if (
    (answer === true && questions[i].a === 't') ||
    (answer === false && questions[i].a === 'f')
  ) {
    // Increase score // Change this to decrease time.
    score++;
    alert('Correct!'); // Push these to a <div> in the page instead of an alert.
  } else {
    alert('Wrong!'); // Push these to a <div> in the page instead of an alert.
  }
}

// Show total at end
alert('You got ' + score + '/' + questions.length);