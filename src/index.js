import './index.scss';


// easy FUOC fix (see index.html style tag)
function handleFuoc(){
  let body = document.querySelector('body');
  body.style.visibility = 'visible';
}

window.addEventListener('load', handleFuoc)