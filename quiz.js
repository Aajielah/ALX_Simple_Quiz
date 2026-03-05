function checkAnswer() {
  const correctAnswer = "4";
  const check = document.getElementById('feedback');

  const name = document.querySelector('input[name="quiz"]:checked');

  const userAnswer = name.value;

  if (userAnswer === correctAnswer) {

    check.textContent = "Correct! Well done.";

} else {
    check.textContent = "That's incorrect. Try again!";
}

}

const submitButton = document.getElementById('submit-answer');

submitButton.addEventListener('click', checkAnswer)

