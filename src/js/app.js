const holes = document.querySelectorAll('.field_hole');
const numOfHoles = holes.length;
const randomField = () => Math.floor(Math.random() * numOfHoles);
let position;
const goblin = document.createElement('img');
goblin.classList.add('field_goblin');

function newPosition() {
  let newField;
  do {
    newField = randomField();
  } while (newField === position);

  position = newField;
}

function goblinAppear() {
  newPosition();
  holes[position].insertAdjacentElement('afterbegin', goblin);
}

setInterval(goblinAppear, 2000);
