const active = document.querySelector('.active');
const item = document.querySelectorAll('.sidebar__item');

function line() {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove('active');
  }
  this.classList.add('active');
}
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('mouseover', line);
}
