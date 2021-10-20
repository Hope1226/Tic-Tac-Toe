const newGameBtn = document.querySelector('#newGameBtn');
const popUpContainer = document.querySelector('.popup-form');
const formCloseBtn = document.querySelector('#formClose');
const body = document.querySelector('body');
const wrapper = document.querySelector('main');

newGameBtn.addEventListener('click', ()=> {
  popUpContainer.style.display = 'grid';
  wrapper.style.background = 'rgba(0, 0, 0, 0.9';
  wrapper.style.filter = 'blur(8px)';


});

formCloseBtn.addEventListener('click', ()=> {
  popUpContainer.style.display = 'none';
  wrapper.style.background = 'none';
  wrapper.style.filter = 'none';
});