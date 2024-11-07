const player = document.querySelector('.player');
const track = document.querySelector('.track');
const obstacles = document.querySelectorAll('.obstacle');
const finishLine = document.querySelector('.finish-line');
const startButton = document.getElementById('start-button');
const album = document.getElementById('album');

let playerX = 10;
let playerSpeed = 5;
let isGameRunning = false;

startButton.addEventListener('click', () => {
  if (!isGameRunning) {
    isGameRunning = true;
    startButton.disabled = true;
    movePlayer();
  }
});

function movePlayer() {
  if (isGameRunning) {
    playerX += playerSpeed;
    player.style.left = playerX + 'px';

    // Check for collisions
    obstacles.forEach(obstacle => {
      const obstacleX = parseInt(obstacle.style.left);
      const obstacleY = parseInt(obstacle.style.bottom);
      if (
        playerX + player.offsetWidth >= obstacleX &&
        playerX <= obstacleX + obstacle.offsetWidth &&
        player.offsetTop >= obstacleY &&
        player.offsetTop <= obstacleY + obstacle.offsetHeight
      ) {
        gameOver();
      }
    });

    // Check for finish line
    const finishLineX = parseInt(finishLine.style.left);
    if (playerX >= finishLineX) {
      winGame();
    }

    requestAnimationFrame(movePlayer);
  }
}

function gameOver() {
  isGameRunning = false;
  alert('You crashed! Try again.');
  resetGame();
}

function winGame() {
  isGameRunning = false;
  alert('You won! Access the album.');
  album.classList.remove('hidden');
}

function resetGame() {
  playerX = 10;
  player.style.left = playerX + 'px';
  startButton.disabled = false;
}