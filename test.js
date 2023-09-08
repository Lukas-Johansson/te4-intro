 export function test(element) {
    document.addEventListener('DOMContentLoaded', function () {
        const cards = document.querySelectorAll('.card');
    
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // Toggle the 'active' class to show/hide the hidden content
                card.classList.toggle('active');
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const quizNextButton = document.getElementById('quiz-next');
        const quizFeedback = document.querySelector('.quiz-feedback');
        const quizQuestions = document.querySelectorAll('.quiz-question-container');
        const quizRadios = document.querySelectorAll('.quiz-radio');
    
        // Keep track of score ye cunt
        let currentQuestion = 0;
        let correctAnswers = 0;
    
        // Should hide all of the questions atleast the one not showind D)
        quizQuestions.forEach((question, index) => {
            if (index !== 0) {
                question.style.display = 'none';
            }
        });
    
        // Makes sure it goes to the next question so no stucky :))))))))
        quizNextButton.addEventListener('click', function () {
            if (currentQuestion < quizQuestions.length - 1) {
                //Hide last question so it doesn't stack 
                quizQuestions[currentQuestion].style.display = 'none';
    
                // Questions are on funny index so make it go up to show newxt question hihi
                currentQuestion++;
    
                // Shows next question with cool css
                quizQuestions[currentQuestion].style.display = 'block';
    
                // restorse awnser so you no go same awnser cuz of bordem
                quizFeedback.textContent = '';
                quizFeedback.style.display = 'none';
    
                // all radio buttons no filled in anymore hiih
                quizRadios.forEach(radio => {
                    radio.checked = false;
                });

            } else {
                //in case all of questions are awnsers so we not stucky in loopy of questions or no feedback
                quizFeedback.textContent = `Du hade ${correctAnswers} av ${quizQuestions.length} rätt svar.`;
                quizFeedback.style.color = 'green';
                quizFeedback.style.display = 'block';
                quizNextButton.style.display = 'none';
            }
        });
    
        // checks for correct awnser ye cheating bastard
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

}


