const board = document.querySelector('#pixel-board');
const collorsPallete = ['black', 'red', 'orange', 'yellow'];
const pallete = document.querySelector('#color-palette');

function changeClass(elementTarget) {
  console.log(elementTarget.target);
  const element = document.getElementsByClassName('selected');
  for (let index = 0; index < element.length; index += 1) {
    element[index].setAttribute('class', 'color');
  }
  elementTarget.target.className = 'color selected';
}

function palleteColor(collors) {
  for (let index = 0; index < collors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.background = collors[index];
    if (collors[index] === 'black') {
      color.className = 'color selected';
    }
    pallete.appendChild(color);
    color.addEventListener('click', changeClass);
  }
  console.log(pallete);
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

// console.log(pallete);

// changeSelected(box);
