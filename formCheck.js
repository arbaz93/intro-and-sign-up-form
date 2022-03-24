const submitButton = document.querySelector('form > button');

submitButton.addEventListener('click', formCheck);

function formCheck() {
  const inputs = document.querySelectorAll('label > input');
  
  inputs.forEach(input => {
    if(input.value == '') {
      input.nextElementSibling.style.display = 'block';
      input.nextElementSibling.nextElementSibling.style.display = 'block';
    } else {
      input.nextElementSibling.style.display = 'none';
      input.nextElementSibling.nextElementSibling.style.display = 'none';
    }
  })
}