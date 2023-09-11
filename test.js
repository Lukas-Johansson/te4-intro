export function test(element) {
    document.addEventListener('DOMContentLoaded', function () {
        const quizNextButton = document.getElementById('quiz-next');
        const quizFeedback = document.querySelector('.quiz-feedback');
        const quizQuestions = document.querySelectorAll('.quiz-question-container');
        const quizRadios = document.querySelectorAll('.quiz-radio');
    
        // Keeps track of the score

        let currentQuestion = 0;
        let correctAnswers = 0;
    
        // Hides all of the other questions
        quizQuestions.forEach((question, index) => {
            if (index !== 0) {
                question.style.display = 'none';
            }
        });
    
        // Makes sure it goes to the next question 
        quizNextButton.addEventListener('click', function () {
            if (currentQuestion < quizQuestions.length - 1) {
                //Hide last question so it doesn't stack 
                quizQuestions[currentQuestion].style.display = 'none';
    
                // Questions are on a index so it makes it go up to show next question
                currentQuestion++;
    
                // Shows next question with cool css
                quizQuestions[currentQuestion].style.display = 'block';
    
                // Clears awnser so can put in a new one for the new question
                quizFeedback.textContent = '';
                quizFeedback.style.display = 'none';
    
                // Clears all radio buttons
                quizRadios.forEach(radio => {
                    radio.checked = false;
                });

            } else {
                //Prints how many correct questions 
                quizFeedback.textContent = `Du hade ${correctAnswers} av ${quizQuestions.length} rätt svar.`;
                quizFeedback.style.color = 'green';
                quizFeedback.style.display = 'block';
                quizNextButton.style.display = 'none';
            }
        });
    
        // Checks if the awnser is correct
        quizRadios.forEach(radio => {
            radio.addEventListener('change', function () {
                if (this.checked) {
                    const selectedLabel = this.nextElementSibling.textContent;
                    if (currentQuestion === 0 && selectedLabel.trim() === 'Teknikinriktning') {
                        correctAnswers++;
                    } else if (currentQuestion === 1 && selectedLabel.trim() === 'Cross-Site Scripting (XSS)') {
                        correctAnswers++;
                    } else if (currentQuestion === 2 && selectedLabel.trim() === 'HTML och CSS') {
                        correctAnswers++;
                    }
                    
                }
            });
        });
    });
};

