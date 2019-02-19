let tweetButton = document.getElementById('tweet-button');
console.log(tweetButton);

function newTweet(){    
    console.log('entrou');
let tweetText = document.getElementById('tweet-area').value;
console.log(tweetText);
let paragraph = document.createElement('p');
var message = document.createTextNode(tweetText);
paragraph.appendChild(message);
document.getElementById("tweets").appendChild(paragraph); 
}

tweetButton.addEventListener('click', newTweet);