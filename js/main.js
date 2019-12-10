const isStorageSupport = true;

const input1 = document.querySelector('#question-input-1');
const button1 = document.querySelector('#question-button-1');
const clearStorage = document.querySelector('#clear');

const allButton = document.querySelector('.questons-block');


const ANSWER = {
    '1': '10',
    '2': '20',
    '3': '30'
};

const checkAnswer = (evt) => {
    evt.preventDefault();
   
    const numberQuestionsElement = evt.target.id;
    const numberQuestionsMassiv = numberQuestionsElement.split('-');
    const numberQuestions = numberQuestionsMassiv[numberQuestionsMassiv.length - 1];
    console.log(numberQuestions);

    const activeButtonId = '#question-button-' + numberQuestions;
    const activeButton = document.querySelector(activeButtonId);
    const activeInputId = '#question-input-' + numberQuestions;
    const activeInput = document.querySelector(activeInputId);

    if (!localStorage.getItem("button" + numberQuestions)) {
        if (activeInput.value === ANSWER[numberQuestions]) {
            localStorage.setItem(activeButtonId, true);
            activeInput.setAttribute('disabled', 'disabled');
            activeButton.setAttribute('disabled', 'disabled');

            localStorage.setItem(activeInputId, activeInput.value);
        }
        else {
            alert('Подумай ещё...');
            activeInput.value = '';
        }
    }
};

const loadLastAnswer = () => {
    if (localStorage.length !== 0) {
        for (let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            
            let notActiveElement = document.querySelector(key);
            notActiveElement.setAttribute('disabled', 'disabled');
            
            if (key.split('-')[1] === 'input') {
                notActiveElement.value = localStorage.getItem(key);
            }
        }
    }
};

clearStorage.addEventListener('click', () => {
    console.log(localStorage.length);
    if (localStorage.length !== 0) {
        for (let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);            
            let notActiveElement = document.querySelector(key);
            notActiveElement.removeAttribute('disabled');
        }
        localStorage.clear();
    }
})

allButton.addEventListener('click', (evt) => {
    var target = event.target;

    if (target.tagName === 'BUTTON') {
        console.log(evt.target);
        checkAnswer(evt);
    }
     
})

loadLastAnswer();
