document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const timePicker = document.getElementById('time');

    yesBtn.addEventListener('click', () => {
        const selectedTime = timePicker.value;
        document.querySelector('.letter').innerHTML = `
            <h1>Thank You! ❤️</h1>
            <p class="message">I'll be there at ${selectedTime}:00 PM</p>
            <p class="sub-message">Can't wait to see you!</p>
            <div class="hearts-container"></div>
        `;
        createHearts();
    });

    noBtn.addEventListener('mouseover', (e) => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    function createHearts() {
        const container = document.querySelector('.hearts-container');
        for(let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);
        }
    }
});