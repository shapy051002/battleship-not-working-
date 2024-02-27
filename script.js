document.addEventListener('DOMContentLoaded', () => {
    const boardContainer = document.getElementById('board-container');
    const boardSize = 10;

    // Create the game board
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            boardContainer.appendChild(cell);
        }
    }

    // Add ships and handle clicks
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    function handleCellClick(event) {
        const clickedCell = event.target;
        const row = clickedCell.dataset.row;
        const col = clickedCell.dataset.col;

        // Simulate placing a ship (you can modify this part)
        if (!clickedCell.classList.contains('ship')) {
            clickedCell.classList.add('ship');
        } else {
            clickedCell.classList.add('hit');
        }
    }
});
