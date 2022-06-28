function rockPaperScissors(p1, p2) {
    if (p1 === p2) {
      return `Draw!`;
    }
    if (p1 === 'rock' && p2 === 'scissors') {
      return `Player 1 won!`;
    } else if (p1 === 'paper' && p2 === 'rock') {
      return `Player 1 won!`;
    } else if (p1 === 'scissors' && p2 === 'paper') {
      return `Player 1 won!`;
    } else {
      return `Player 2 won!`;
    }
  }
  rockPaperScissors('rock', 'rock');      // Draw!
  rockPaperScissors('scissors', 'rock');  // Player 2 won!
  rockPaperScissors('paper', 'rock');     // Player 1 won!
  rockPaperScissors('paper', 'paper');    // Draw!