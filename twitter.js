let tweetArea = document.getElementById('tweet-area');
let tweetButton = document.getElementById('tweet-button');
let counter = document.getElementById('counter');
tweetButton.disabled = true;

function btnEnable() {
    tweetButton.disabled = false;
    tweetButton.style.backgroundColor = '#1DA1F2';
    tweetButton.style.cursor = 'pointer';
}

function btnDisabled() {
    tweetButton.disabled = true;
    tweetButton.style.backgroundColor = '#BFAFAC';
    tweetButton.style.cursor = 'auto';
}

function reset() {
    btnDisabled();
    counter.innerHTML = 140;
    counter.style.color = '#657786';
    tweetArea.rows = 1;
}

function newRows() {
    let cols = tweetArea.cols;
    let arrayText = tweetArea.value.split('\n');
    let rows = arrayText.length;
    for (i = 0; i < arrayText.length; i++) {
        rows += parseInt(arrayText[i].length / cols);
    };
    if (rows <= 1) tweetArea.rows = 1;
    else tweetArea.rows = rows;
}

function typingTweet() {
    let tweetLength = tweetArea.value.length;
    let characters = 140 - tweetLength;
    if (tweetArea.value) {
        counter.innerHTML = characters;
        if (characters >= 0) {
            btnEnable();
            if (characters < 20 && characters > 9) {
                counter.style.color = 'orange';
            } else if (characters < 10) {
                counter.style.color = 'red';
            } else if (characters > 19) {
                counter.style.color = '#657786';
            }
        } else {
            btnDisabled();
        }
    } else {
        reset();
    }
    newRows();
}

tweetArea.addEventListener('input', typingTweet);

function newTweet() {
    let tweetText = tweetArea.value;
    let textParagraph = document.createElement('p');
    textParagraph.textContent = tweetText;
    let date = moment().format('HH:mm');
    let dateParagraph = document.createElement('p');
    dateParagraph.textContent = date;
    let tweetBox = document.createElement('div');
    document.getElementById("tweets").appendChild(tweetBox);
    tweetBox.appendChild(textParagraph);
    tweetBox.appendChild(dateParagraph);
    tweetArea.value = '';
    reset();
}

tweetButton.addEventListener('click', newTweet);