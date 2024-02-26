document.addEventListener("DOMContentLoaded", () => {
    const gameArena = document.getElementById("game-arena");
    const arenaSize = 600;
    const cellSize = 20;
    let score = 0;
    let gameStarted = false;
    let food = {x:300, y:200};
    let snake = [{x: 160, y: 200}, {x: 140, y: 200}, {x:120, y:200}];
    let dx = cellSize; // displacement in x axis
    let dy = 0; // displacement on y axis

    function drawScoreBoard() {
        const scoreBoard = document.getElementById('score-board');
        scoreBoard.textContent = `Score : ${score}`;
    }

    function drawDiv(x, y, className) {
        const div = document.createElement('div');
        div.classList.add(className);
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
        return div;
    }

    function drawFoodAndSnake() {
        gameArena.innerHTML = ''; // if previously something is drawn remove it wipe  out and redraw with new coordinates when snake moves

        snake.forEach((snakeCell) => {
            const element = drawDiv(snakeCell.x, snakeCell.y, 'snake');
            gameArena.appendChild(element);
        })

        const foodElement = drawDiv(food.x, food.y, 'food');
        gameArena.appendChild(foodElement);
    }

    function startGame() {

    }

    function gameLoop() {
        setInterval(() => {
            drawScoreBoard();
            drawFoodAndSnake();
        }, 1000);
    }


    function initiateGame() {
        const scoreBoard = document.createElement('div');
        scoreBoard.id = 'score-board';
        document.body.insertBefore(scoreBoard, gameArena);

        const startButton = document.createElement('button');
        startButton.textContent = 'Start Game';
        startButton.classList.add('start-button');
        document.body.appendChild(startButton);

        startButton.addEventListener('click', ()=> {
            startButton.style.display = 'none';
            runGame();
        })
    }

    initiateGame(); // this the the first function to be execute so that we can prepare the ui
});