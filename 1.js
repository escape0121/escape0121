document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name-input').value;
    if (name) {
        localStorage.setItem('inspectorName', name);
        window.location.href = '2.html'; // Rediriger vers la page de jeu
    }
});
