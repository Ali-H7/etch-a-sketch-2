function createBoard(squareCount = 16) {
    const container = document.querySelector(".container")
    const squareSize = 800 / squareCount;
    squareCount = squareCount * squareCount;
    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.opacity = '0'
        square.style.width = `${squareSize}` + "px";
        square.style.height = `${squareSize}` + "px";
        addColorOnHover(square);
        container.appendChild(square);
    }
}

function addColorOnHover(squareElement) {
    squareElement.addEventListener('mouseenter', () => setColors(squareElement));
};

function getColors() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return [r, g, b];
}

function setColors(squareElement) {
    const colors = getColors();
    const opacity = setOpacity(squareElement);
    squareElement.style.backgroundColor = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${opacity} )`;
}

function setOpacity(squareElement) {
    const currentOpacity = squareElement.dataset.opacity;
    let newOpacity = null;
    if (currentOpacity > 1) {
        newOpacity = 1;
    } else {
        newOpacity = Number(currentOpacity) + 0.1;
        squareElement.dataset.opacity = newOpacity;
    }
    return newOpacity;
};

function clearBoard() {
    const container = document.querySelector(".container")
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getUserInput() {
    while (true) {
        const userInput = prompt("Enter a number 1-100", 16);
        const boardSize = Number(userInput);
        if (boardSize >= 1 && boardSize <= 100) return boardSize;
    };
}

function addBoardSizeEvents() {
    const resizeBtn = document.querySelector(".resize-btn")
    resizeBtn.addEventListener('click', () => handleResize());

}

function handleResize() {
    clearBoard()
    const userInput = getUserInput();
    createBoard(userInput);
}

createBoard();
addBoardSizeEvents();