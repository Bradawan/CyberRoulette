function handleRandomCredential(type, data) {
  const elementId = type === 'username' ? 'random-username' : 'random-password';
  document.getElementById(elementId).textContent = data;
}

function handleError(error) {
  console.error('Error fetching data:', error);
  document.getElementById('output').textContent = 'Sorry, something went wrong.';
}

document.getElementById('random-credential-btn').addEventListener('click', function() {
  fetchRandomLine('data/usernames.txt', data => handleRandomCredential('username', data), handleError);
  fetchRandomLine('data/passwords.txt', data => handleRandomCredential('password', data), handleError);
});
