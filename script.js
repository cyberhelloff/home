document.addEventListener('DOMContentLoaded', () => {
    const heartFill = document.querySelector('.heart-fill');
    const typingText = document.querySelector('.typing-text');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    
    // Fill heart meter
    setTimeout(() => {
        heartFill.style.width = '100%';
    }, 1000);

    // Typing effect
    const text = "Tonight, I have something special to ask...";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < text.length) {
            typingText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 1500);

    // Handle yes button click
    yesBtn.addEventListener('click', () => {
        const selectedTime = document.getElementById('time-select').value;
        const messageSection = document.querySelector('.message-section');
        
        messageSection.innerHTML = `
            <h2 class="animate__animated animate__fadeInUp">Thank You! ❤️</h2>
            <p class="animate__animated animate__fadeInUp animate__delay-1s">
                I'll be there at ${selectedTime}:00 PM
            </p>
            <div id="countdown" class="countdown"></div>
        `;
        
        startCountdown(selectedTime);
        createFloatingHearts();
    });

    // Moving no button
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    function createFloatingHearts() {
        for(let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = Math.random() * 3 + 2 + 's';
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 5000);
            }, i * 300);
        }
    }

    function startCountdown(selectedTime) {
        const countdownElement = document.getElementById('countdown');
        const targetTime = new Date();
        targetTime.setHours(selectedTime, 0, 0);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetTime - now;

            if (difference <= 0) {
                clearInterval(timer);
                countdownElement.textContent = "On my way! ❤️";
                return;
            }

            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            countdownElement.textContent = 
                `${hours}h ${minutes}m ${seconds}s until I arrive`;
        }, 1000);
    }
});