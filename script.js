// script.js

// Create floating hearts on page load
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    
    // Initialize page-specific functionality
    if (document.getElementById('days')) {
        setupCountdown();
    }
    
    if (document.getElementById('giftMessage')) {
        setupGiftBox();
    }
    
    if (document.getElementById('complimentMessage')) {
        setupCompliments();
    }
});

// Floating Hearts
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts') || document.body;
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heart.style.fontSize = (Math.random() * 12 + 10) + 'px';
        heartsContainer.appendChild(heart);
    }
}

// Countdown Timer
function setupCountdown() {
    // Set target date: 10 June 2026 (16th birthday)
    const targetDate = new Date('June 10, 2026 12:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            document.getElementById('message').textContent = "🎉 It's your 16th birthday! Happy Birthday, my love!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
}

// Virtual Gift Box
function setupGiftBox() {
    const gifts = [
        "A warm hug from me to you! 🤗",
        "A kiss blown across the sky! 💋",
        "A promise to never stop loving you. 💞",
        "A star named after you in my sky. ✨",
        "A laugh shared through our calls. 😂",
        "A memory we'll cherish forever. 📸",
        "A future where we're finally together. 🏡",
        "A smile just for you! 😊",
        "A dream where we dance under the moonlight. 🌙",
        "An 'I miss you' that turns into 'I love you.' ❤️"
    ];

    let currentGiftIndex = 0;

    window.openGift = function() {
        const messageBox = document.getElementById("giftMessage");
        messageBox.style.opacity = 0;
        
        setTimeout(() => {
            messageBox.textContent = gifts[currentGiftIndex];
            messageBox.style.opacity = 1;
            currentGiftIndex = (currentGiftIndex + 1) % gifts.length;
        }, 300);
    };
}

// Compliment Generator
function setupCompliments() {
    const compliments = [
        "You have the most beautiful smile that lights up my world.",
        "Your voice is my favorite sound in the entire world.",
        "Being with you, even virtually, feels like home.",
        "You inspire me to be a better person every single day.",
        "Your kindness and warmth make everyone around you feel loved.",
        "I fall for you more every time I see your face or hear your name.",
        "You're not just my girlfriend — you're my soulmate.",
        "The way you care for others shows how big your heart truly is.",
        "You make ordinary moments feel magical.",
        "Even across the miles, you make me feel so loved and safe."
    ];

    window.giveCompliment = function() {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const messageBox = document.getElementById("complimentMessage");
        messageBox.style.opacity = 0;
        
        setTimeout(() => {
            messageBox.textContent = compliments[randomIndex];
            messageBox.style.opacity = 1;
        }, 300);
    };
}