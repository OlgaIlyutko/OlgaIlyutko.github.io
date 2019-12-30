const isStorageSupport = true;

const input1 = document.querySelector('#question-input-1');
const button1 = document.querySelector('#question-button-1');
const clearStorage = document.querySelector('#clear');
const clearAllStorage = document.querySelector('#clearAll');
const imgMap = document.querySelector('.map>img')

const allButton = document.querySelector('.questons-block');


const ANSWER = {
    '1': 'Ограбление по-мексикански',
    '2': '29',
    '3': 'Странная история доктора Джекила и мистера Хайда',
    '4': 'Стейк',
    '5': 'Тик так бумм',
    '6': 'Хозяин этажа',
    '7': 'Коса',
    '8': 'Текила',
    '9': 'Закон Архимеда',
    '10': 'Незабудки',
    '11': 'Сплинтер'
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
        if (activeInput.value.toUpperCase() === ANSWER[numberQuestions].toUpperCase()) {

            imgMap.src = 'img/' + numberQuestions + '.png';
            localStorage.setItem('#map-img', imgMap.src);

            activeButton.setAttribute('disabled', 'disabled');
            localStorage.setItem(activeButtonId, true);

            activeInput.setAttribute('disabled', 'disabled');
            localStorage.setItem(activeInputId, activeInput.value);
        }
        else {
            alert('Ошибочка...Выпивайте штрафную!');
            activeInput.value = '';
        }
    }
};

const loadLastAnswer = () => {
    if (localStorage.length !== 0) {
        for (let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            
            let notActiveElement = document.querySelector(key);
            switch (key.split('-')[1]) {
                case 'button':
                    notActiveElement.setAttribute('disabled', 'disabled');
                    break;
                case 'input':
                    notActiveElement.value = localStorage.getItem(key);
                    notActiveElement.setAttribute('disabled', 'disabled');
                    break;
                case 'img':
                    notActiveElement.src = localStorage.getItem(key);
                    break;
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
            switch (key.split('-')[1]) {
                case 'button':
                    notActiveElement.removeAttribute('disabled');
                    break;
                case 'input':
                    notActiveElement.value = '';
                    notActiveElement.removeAttribute('disabled');
                    break;
                case 'img':
                    notActiveElement.src = 'img/start.png';
                    break;
            }
        }
        localStorage.clear();
    }
})

clearAllStorage.addEventListener('click', () => localStorage.clear());

allButton.addEventListener('click', (evt) => {
    var target = event.target;

    if (target.tagName === 'BUTTON') {
        console.log(evt.target);
        checkAnswer(evt);
    }
     
})

loadLastAnswer();
