const board = document.querySelector('#pixel-board');

const collorsPallete = ['black', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'blue'];
const pallete = document.querySelector('#color-palette');

function palleteColor(collors) {
  for (let index = 0; index < collors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.background = collors[index];
    pallete.appendChild(color);
  }
}

function creatBoard(row, cell) {
  for (let index = 0; index < row; index += 1) {
    const tableRow = document.createElement('tr');
    board.appendChild(tableRow);
    for (let index2 = 0; index2 < cell; index2 += 1) {
      const rowCell = document.createElement('td');
      rowCell.className = 'pixel';
      tableRow.appendChild(rowCell);
    }
  }
}

palleteColor(collorsPallete);
creatBoard(5, 5);
