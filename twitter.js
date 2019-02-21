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
    tweetArea.value = '';
    counter.innerHTML = 140;
    counter.style.color = '#657786';
    tweetArea.style.height = 'auto';
}

function newRows() {
    tweetArea.style.height = tweetArea.scrollHeight + 'px';
}

function typingTweet() {
    let tweetLength = tweetArea.value.length;
    let characters = 140 - tweetLength;
    counter.innerHTML = characters;
    if (tweetArea.value) {
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
    let date = moment().format('HH:mm');
    let tweets = document.getElementById("tweets");
    tweets.innerHTML = '<div><p>' + tweetText + '</p> <p>' + date + '</p></div>';
    reset();
}

tweetButton.addEventListener('click', newTweet);