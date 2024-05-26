document.addEventListener("DOMContentLoaded", function() {
    const playerName = localStorage.getItem('inspectorName');
    if (playerName) {
        document.getElementById('player-name').textContent = playerName;
    }

    const lines = document.querySelectorAll('.fade-line');
    lines.forEach((line, index) => {
        line.style.animationDelay = `${index * 1.5}s`;
    });
});
