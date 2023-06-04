const guessInput = document.getElementById('guessInput');

guessInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();

    const guess = guessInput.value.trim();

    if (guess === '') {
      alert('Please enter a word.');
      return;
    }

    fetch('/api/game/guess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guess }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the response data
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});
