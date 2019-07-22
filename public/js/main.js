const completePass = document.querySelector('#password');
const progress = document.querySelector('.progress');

function confirm() {
  this.style.marginBottom = '0px';
  progress.classList.remove('hidden');
  const myPassword = this.value;
  if (myPassword.length < 4) {
    progress.children[0].style.backgroundColor = '#FF6359';
    progress.children[1].style.backgroundColor = '#EBEFF3';
    progress.children[2].style.backgroundColor = '#EBEFF3';
  } else if (myPassword.length < 8) {
    progress.children[0].style.backgroundColor = '#FFB966';
    progress.children[1].style.backgroundColor = '#FFB966';
    progress.children[2].style.backgroundColor = '#EBEFF3';
  } else {
    progress.children[0].style.backgroundColor = '#38ECAC';
    progress.children[1].style.backgroundColor = '#38ECAC';
    progress.children[2].style.backgroundColor = '#38ECAC';
  }
  if (myPassword == '') {
    this.style.marginBottom = '15px';
    progress.classList.add('hidden');
  }
}
completePass.addEventListener('keyup', confirm);
