
const startGameButton = document.querySelector('#startGame'),
    letterInput = document.querySelector("#letter"),
    wordText = document.querySelector("#word"),
    enterLetterButton = document.querySelector("#enterLetter"),
    lettersBlock = document.querySelector('#letters_block'),
    wordBlock = document.querySelector('#word_block'),
    resultGame = document.querySelector('#result__game');

let words = [
    "orange",
    "dictionary",
    "situation",
    "development",
    "result",
    "art",
    "good",
];
const ALPHABET = ['A', 'E', 'I', 'O', 'U', 'Y',
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
]
startGameButton.addEventListener("click", startGame);
let lettersEnteredCorrect = [];
let allEnteredLetters = [];
let numberOfAttempts = 0;
let numberOfMoves = 0;
let word = '';
let enteredWord = [];
let wordSpell = [];

function startGame() {
    lettersEnteredCorrect = [];
    allEnteredLetters = [];
    numberOfAttempts = 0;
    numberOfMoves = 0;
    enteredWord = [];
    wordSpell = [];
    makeWord();
    makeAttemptsBlock();
    wordBlock.innerHTML = `<p class='enteredWord'>${enteredWord.join(' ')}</p>`
    lettersBlock.innerHTML = `${createAlphabetButtons().join(' ')}`;
    resultGame.textContent = '';
    for (let i = 0; i < ALPHABET.length; i++) {
        document.querySelector(`#letter-${ALPHABET[i]}`).addEventListener("click", addLetter);
    }
}
function makeWord() {
    word = words[Math.floor(Math.random() * words.length)];
    enteredWord = word.split('').map(el => el = '_');
    wordSpell = word.toUpperCase().split('');
}

function makeAttemptsBlock() {

}
function addLetter(el) {
    const newLetter = el.target.value;
    let isRight = false;
    document.querySelector(`#${el.target.id}`).disabled = true;
    numberOfMoves++;
    allEnteredLetters.push(newLetter);

    wordSpell.forEach((letter, index) => {
        if (letter === newLetter) {
            enteredWord[index] = newLetter;
            wordBlock.innerHTML = `<p class='enteredWord'>${enteredWord.join(' ')}</p>`;
            isRight = true;
            document.querySelector(`#${el.target.id}`).classList.add('letter__correct');
        } else {
            document.querySelector(`#${el.target.id}`).classList.add('letter__wrong');
        }
    });
    checkResult(isRight);
}

function checkResult(isRight) {
    if (!isRight && numberOfAttempts < 10) {
        numberOfAttempts++;
        document.querySelector(`#step${numberOfAttempts}`).classList.add('attemptUsed');
    } else if (numberOfAttempts === 10) {
        document.querySelector(`#step${11}`).classList.add('attemptUsed');
        gameOver();
    } else if (numberOfAttempts < 11 && enteredWord.join('') === wordSpell.join('')) {
        gameWon()
    }
}
function gameOver() {
    resultGame.innerHTML = '<h2 class="result_text">Game over</h2>';
    setTimeout(startGame, 4000);
}
function gameWon() {
    resultGame.innerHTML = '<h2 class="result_text" >You won</h2>';
    setTimeout(startGame, 4000);
}
function createAlphabetButtons() {
    return ALPHABET.map(el => {
        return `<input type="button" class='letters__button' value='${el}' id="letter-${el}">`
    })
}


