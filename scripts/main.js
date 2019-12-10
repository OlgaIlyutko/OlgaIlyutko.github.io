const but1 = document.querySelector('#main');
const input1 = document.querySelector('#question1');
but1.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (input1.value === '1') {
        alert('+');
    }
    else {
        alert('-');
    }
})
