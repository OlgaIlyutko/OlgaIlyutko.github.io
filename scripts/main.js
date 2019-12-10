const isStorageSupport = true;

const but1 = document.querySelector('#main');
const input1 = document.querySelector('#question1');

but1.addEventListener('click', (evt) => {
    evt.preventDefault();

    localStorage.getItem("but1");
    if (!localStorage.getItem("but1")) {
        alert('no push');
        if (input1.value === '1') {
            alert('+');
            localStorage.setItem("but1", true);
        }
        else {
            alert('-');
        }
    } else {
        alert('вы уже правильно отвечали на этот вопрос')
    } 
})
