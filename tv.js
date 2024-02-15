const dateInput = document.getElementById('inputDate');
const displayDate = document.getElementById('displayDate');

dateInput.addEventListener('input', function () {
  const enteredDate = dateInput.value;
  displayDate.textContent = `Ingevoerde datum: ${enteredDate}`;
});
