function handleRandomLine(line, error) {
  const outputElement = document.getElementById('output');
  if (error) {
    outputElement.textContent = 'Sorry, something went wrong.';
  } else {
    outputElement.textContent = line;
  }
}

document.getElementById('random-username-btn').addEventListener('click', function() {
  fetchRandomLine('data/usernames.txt', handleRandomLine);
});

document.getElementById('random-password-btn').addEventListener('click', function() {
  fetchRandomLine('data/passwords.txt', handleRandomLine);
});
