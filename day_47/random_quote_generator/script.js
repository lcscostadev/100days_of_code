const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author .name');
const quoteBtn = document.querySelector('button');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');

// random quote function
function randomQuote() {
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading Quote...';
    // fetching random quote/data from the API and parsing it into javascript object
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        quoteAuthor.innerText = result.author;
        quoteBtn.innerText = 'New Quote';
        quoteBtn.classList.remove('loading');
    });
}

soundBtn.addEventListener('click', () => {
    // the SpeechSynthesisUtterance is a web speech api that represents speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`);
    speechSynthesis.speak(utterance); //speak method of speechSynthesis speaks the utterance
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, '_blank');
})

quoteBtn.addEventListener('click', randomQuote);