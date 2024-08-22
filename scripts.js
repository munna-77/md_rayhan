document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    alert('Profile created for ' + username);
});

function startGame(gameId) {
    alert('Starting ' + gameId);
    // Here you would load the game and handle game progress
}
