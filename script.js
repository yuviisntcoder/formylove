// 1. PASSWORD PROTECTION FUNCTIONS
function checkCode() {
    const code = document.getElementById("code-input").value.trim();
    if (code === "15") { 
        document.getElementById("entry-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("entry-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 500);
    } else {
        document.getElementById("error-msg").classList.add("show");
    }
}

// Enter key functionality for password
document.getElementById("code-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});

// 2. LOVE LETTER FUNCTIONS
function openLetter() {
    const envelope = document.querySelector('.envelope');
    const song = document.getElementById('love-song');
    
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        song.play();
        createHearts();
    } else {
        song.pause();
    }
}

// Create floating hearts animation
function createHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('heart-fall');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.opacity = Math.random();
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 300);
    }
}

// 3. AUTO-TRIGGER WHEN LETTER SCROLLED INTO VIEW
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const envelope = document.querySelector('.envelope');
            if (!envelope.classList.contains('open')) {
                openLetter();
            }
        }
    });
}, {threshold: 0.5});

// Start observing the love letter section
const loveLetterSection = document.getElementById('love-letter');
if (loveLetterSection) {
    observer.observe(loveLetterSection);
}

// 4. MUSIC PLAYER AUTO-PAUSE
document.getElementById('song1').addEventListener('play', function() {
    document.getElementById('song2').pause();
});

document.getElementById('song2').addEventListener('play', function() {
    document.getElementById('song1').pause();
});