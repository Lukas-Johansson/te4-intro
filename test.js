//make the cards content get added on the site once pressed   

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
        const cards2 = document.querySelectorAll('.card2');
    
        cards2.forEach(card2 => {
            card2.addEventListener('click', () => {
                // Toggle the 'active' class to show/hide the hidden content
                card2.classList.toggle('active');
            });
        });
    });
    
}
