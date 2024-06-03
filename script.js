//your JS code here. If required.
// script.js
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentStep = 1;

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === circles.length;
}

nextButton.addEventListener('click', () => {
    if (currentStep < circles.length) {
        currentStep++;
        updateProgress();
    }
});

prevButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});

updateProgress(); // Initialize progress bar