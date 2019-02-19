let tweetArea = document.getElementById('tweet-area');
let tweetButton = document.getElementById('tweet-button');

function showButton() {
    let tweetLength = tweetArea.value.length;
    if (tweetArea.value) {
        tweetButton.style.visibility = 'visible';
        let characters = 140 - tweetLength;
        let counter = document.getElementById('counter');
        counter.innerHTML = characters;

    } else {
        tweetButton.style.visibility = 'hidden';
        counter.innerHTML = 140;
    }
}

tweetArea.addEventListener('input', showButton);

function newTweet() {
    let tweetText = document.getElementById('tweet-area').value;
    let paragraph = document.createElement('p');
    let message = document.createTextNode(tweetText);
    paragraph.appendChild(message);
    document.getElementById("tweets").appendChild(paragraph);
}

tweetButton.addEventListener('click', newTweet);