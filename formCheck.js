const submitButton = document.querySelector('form > button');
const inputFields = document.querySelectorAll('form input')




function isInputEmpty(input) {
  if (validator.isEmpty(input.value)) {
    displayErrorMsg(input)
    return false
  } else {
    removeErrorMsg(input)
    return true
  }
}

function displayErrorMsg(input) {
  input.nextElementSibling.style.display = 'block';
  input.nextElementSibling.nextElementSibling.style.display = 'block';
}
function removeErrorMsg(input) {
  input.nextElementSibling.style.display = 'none';
  input.nextElementSibling.nextElementSibling.style.display = 'none';
}

function formCheck(e) {
  e.preventDefault();
  const validate = [];

  inputFields.forEach(input => {
    // push the return boolean value to validate array
    validate.push(isInputEmpty(input))

    // check if email input is valid and push the return value to validate array
  if (input.name == 'email') {
    validate.push(validator.isEmail(input.value))
    if (!validator.isEmail(input.value)) displayErrorMsg(input)
  }
  })

  // Check if every element of validate array is true || false
  return validate.every(bool => bool)
}

// Write function here to submit form
async function submitForm(event) {
  if(formCheck(event)) {
    // Code for submission comes here
  }
}

submitButton.addEventListener('click', (event) => {
  submitForm(event)
});