export function test(element) {
    document.addEventListener('DOMContentLoaded', function () {
        const quizNextButton = document.getElementById('quiz-next');
        const quizFeedback = document.querySelector('.quiz-feedback');
        const quizQuestions = document.querySelectorAll('.quiz-question-container');
        const quizRadios = document.querySelectorAll('.quiz-radio');

        // Keeps track of the score
        let currentQuestion = 0;
        let correctAnswers = 0;

        // Hides all questions except the first one
        quizQuestions.forEach((question, index) => {
            if (index !== 0) {
                question.style.display = 'none';
            }
        });

        // Function to show the next question
        function showNextQuestion() {
            if (currentQuestion < quizQuestions.length - 1) {
                // Hide the current question
                quizQuestions[currentQuestion].style.display = 'none';
                // Move to the next question and show it
                currentQuestion++;
                quizQuestions[currentQuestion].style.display = 'block';
                // Clear answer feedback
                quizFeedback.textContent = '';
                quizFeedback.style.display = 'none';
                // Clear all radio buttons
                quizRadios.forEach(radio => {
                    radio.checked = false;
                });
            } else {
                // Print the final score
                quizFeedback.textContent = `Du fick ${correctAnswers} av ${quizQuestions.length} korrekta svar.`;
                quizFeedback.style.color = 'green';
                quizFeedback.style.display = 'block';
                quizNextButton.style.display = 'none';
            }
        }

        // Add an event listener to the "Next" button
        quizNextButton.addEventListener('click', showNextQuestion);

        // Check if the answer is correct
        quizRadios.forEach(radio => {
            radio.addEventListener('change', function () {
                if (this.checked) {
                    const selectedLabel = this.nextElementSibling.textContent;
                    // Check the selected answer based on the current question
                    switch (currentQuestion) {
                        case 0:
                            if (selectedLabel.trim() === 'Teknikinriktning') {
                                correctAnswers++;
                            }
                            break;
                        case 1:
                            if (selectedLabel.trim() === 'Han bidrog till utvecklingen av responsiva webbsidor och användargränssnitt') {
                                correctAnswers++;
                            }
                            break;
                        case 2:
                            if (selectedLabel.trim() === 'Lukas har erfarenhet av HTML, CSS och JavaScript') {
                                correctAnswers++;
                            }
                            break;
                        case 3:
                            if (selectedLabel.trim() === 'Cross-Site Scripting (XSS)') {
                                correctAnswers++;
                            }
                            break;
                        case 4:
                            if (selectedLabel.trim() === 'Lukas är en dedikerad webutvecklare med ett brinnande intresse för säkerhetsaspekterna av webbutveckling') {
                                correctAnswers++;
                            }
                            break;
                        default:
                            break;
                    }
                }
            });
        });
    });
}
