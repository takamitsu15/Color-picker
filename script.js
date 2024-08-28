const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');

colorPicker.addEventListener('input', (event) => {
    colorDisplay.style.backgroundColor = event.target.value;
});
