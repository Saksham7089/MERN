let randomNumber = parseInt((Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guested Right`);
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOoooo Low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOoooo Hig`);
    }
}

function displayGuess(guess) {
    userinput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userinput.value = ''
    userinput.setAttribute('disable', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">----START NEW GAME----</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt((Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disable');
        startOver.removeChild(p);
        playGame = true;
    })
}
