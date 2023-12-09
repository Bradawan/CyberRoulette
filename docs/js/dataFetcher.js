function fetchRandomLine(filePath, callback) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      const lines = text.split('\n').filter(line => line.trim());
      if (lines.length === 0) {
        throw new Error('The file is empty or does not contain valid lines.');
      }
      const randomIndex = Math.floor(Math.random() * lines.length);
      const randomLine = lines[randomIndex].trim();
      callback(randomLine);
    })
    .catch(error => {
      console.error('Failed to fetch random line:', error);
      callback(null, error);
    });
}
