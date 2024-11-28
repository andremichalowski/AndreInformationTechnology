function runGame() {
    const colorOptions = ['red', 'blue', 'green', 'yellow', 'orange'];
    let guess = '';
    let correct = false;
    let numTries = 0;
  
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    const targetColor = colorOptions[randomIndex];
    console.log('line9', targetColor);
    colorOptions.sort();
  
    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + colorOptions.join(', ') + '\n\nWhat color have I selected?\n');
        guess = guess.toLowerCase();
        numTries += 1;

        console.log('line17', guess);
  
      if (guess === null) {
        alert('The game has been abandoned. ');
        return;
      }
  
      correct = checkGuess(guess, targetColor, colorOptions);
    } while (!correct);
  
    alert(
      `Congratulations! You have guessed the color!\n` +
      `It took you ${numTries} guesses to finish the game!\n\n`
    );
    document.body.style.backgroundColor = `${targetColor}`;
  }

  function checkGuess(guess, targetColor, colorOptions) {
    const sorryMsg = 'Sorry, your guess is incorrect. ';
    const tryMsg = 'Please try again.';
  
    if (!colorOptions.includes(guess)) {
      alert(`Sorry, I don't recognize your color. ${tryMsg}`);
    } else if (guess < targetColor) {
      alert(`${sorryMsg}Hint: your color is before mine. ${tryMsg}`);
    } else if (guess > targetColor) {
      alert(`${sorryMsg}Hint: your color is after mine. ${tryMsg}`);
    } else {
      return true;
    }
  
    return false;
  }
  
  