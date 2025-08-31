function createSquares(squareCount = 16) {
    const container = document.querySelector(".container")
    const squareSize = 800 / squareCount;
    squareCount = squareCount * squareCount;
    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}` + "px";
        square.style.height = `${squareSize}` + "px";
        // addColorOnHover(square);
        container.appendChild(square);
    }
}

// function addColorOnHover(squareElement) {
//     squareElement.addEventListener('mouseenter', () => setColors(squareElement));
// };

// function getColors() {
//     const r = Math.floor(Math.random() * 255) + 1;
//     const g = Math.floor(Math.random() * 255) + 1;
//     const b = Math.floor(Math.random() * 255) + 1;
//     return [r, g, b];
// }

// function setColors(squareElement) {
//     const colors = getColors();
//     squareElement.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
// }

createSquares();
