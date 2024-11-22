// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select all color-box elements and the button
    const colorBoxes = document.querySelectorAll('.color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // Function to generate a random hex color code
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener to change the background color of all boxes when the button is clicked
    changeColorBtn.addEventListener('click', function() {
        // For each box, generate a random color and apply it
        colorBoxes.forEach(function(box) {
            const randomColor = getRandomColor();
            box.style.backgroundColor = randomColor;
        });
    });
});
