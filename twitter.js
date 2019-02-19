let tweetArea = document.getElementById('tweet-area');
let tweetButton = document.getElementById('tweet-button');

function showButton() {
    let tweetLength = tweetArea.value.length;
    let characters = 140 - tweetLength;
    if (tweetArea.value) {
        let counter = document.getElementById('counter');
        counter.innerHTML = characters;
        if (characters >= 0) {
            tweetButton.style.visibility = 'visible';
            if (characters < 20 && characters > 9) {
                counter.style.color = 'orange';
            } else if (characters < 10) {
                counter.style.color = 'red';
            } else if (characters > 19) {
                counter.style.color = '#657786';
            }
        } else {
            tweetButton.style.visibility = 'hidden';
        }
    } else {
        tweetButton.style.visibility = 'hidden';
        counter.innerHTML = 140;
        counter.style.color = '#657786';
    }
    let tweetText = tweetArea.value;
    let cols = tweetArea.cols;
    let arrayText = tweetText.split('\n');
    let rows = arrayText.length;
    console.log(cols);
    console.log(arrayText);
    /*for (i=0;i<arrayText.length;i++) 
    rows+=parseInt(arrayText[i].length/cols);*/
    if (rows <= 1) tweetArea.rows = 1;
    else tweetArea.rows = rows;
    console.log(rows);
}

tweetArea.addEventListener('input', showButton);

function newTweet() {
    let tweetText = tweetArea.value;
    let paragraph = document.createElement('p');
    let message = document.createTextNode(tweetText);
    paragraph.appendChild(message);
    document.getElementById("tweets").appendChild(paragraph);
}

tweetButton.addEventListener('click', newTweet);