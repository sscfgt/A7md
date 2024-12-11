// Tic Tac Toe Game
const board = document.getElementById('tic-tac-toe-board');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Create Tic-Tac-Toe Grid
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
}

// Handle cell click
function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');
    if (gameBoard[index] || gameOver) return;

    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
        alert(`${currentPlayer} Wins!`);
        gameOver = true;
    } else if (gameBoard.every(cell => cell)) {
        alert("It's a Draw!");
        gameOver = true;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Check for winning conditions
function checkWin(player) {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => gameBoard[index] === player);
    });
}
