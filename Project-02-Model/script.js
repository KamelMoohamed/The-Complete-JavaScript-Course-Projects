'use strict';

const btnOpen = document.querySelectorAll('.show-modal');
const model = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < 3; i++) {
  btnOpen[i].addEventListener('click', openModel);
}

btnClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
});
