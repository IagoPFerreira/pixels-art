window.onload = function () {
  palleteColor(collorsPallete);
  creatBoard(5, 5);
};

const board = document.querySelector('#pixel-board');
const collorsPallete = ['black', 'red', 'orange', 'yellow'];
const pallete = document.querySelector('#color-palette');
const clearBoard = document.querySelector('#clear-board');


function changeClass(elementTarget) {
  const element = document.getElementsByClassName('selected');
  for (let index = 0; index < element.length; index += 1) {
    element[index].setAttribute('class', 'color');
  }
  elementTarget.target.setAttribute('class', 'color selected');
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
}

function changeColor(elementTarget) {
  const element = document.getElementsByClassName('selected');
  const color = element[0].getAttribute('style');
  const pixel = document.querySelectorAll('.pixel');
  console.log(pixel);
  elementTarget.target.setAttribute('style', `${color}`);
}

function creatBoard(row, cell) {
  for (let index = 0; index < row; index += 1) {
    const tableRow = document.createElement('tr');
    board.appendChild(tableRow);
    for (let index2 = 0; index2 < cell; index2 += 1) {
      const rowCell = document.createElement('td');
      rowCell.className = 'pixel';
      tableRow.appendChild(rowCell);
      rowCell.addEventListener('click', changeColor);
    }
  }
}

function clear(board) {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].removeAttribute('style');
  }
}

clearBoard.addEventListener('click', clear);
