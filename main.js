const button = document.querySelector('.btn');
const closeIcon = document.querySelector('.icon');

let quotes = 
    ['If I cannot do great things, I can do small things in a great way.', 
    'Life is 10% what happens to us and 90% how we react to it.', 
    'The only way to achieve the impossible is to believe it is possible.', 
    'Opportunity is missed by most people because it is dressed in overalls and looks like work.'];


function getQuote(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

button.addEventListener('click', () => {
  let quote = getQuote(quotes);
  const quoteContainer = document.querySelector('.quote-container');
  const quoteElement = document.querySelector('.quote');

    quoteElement.textContent = quote; // Set the quote text
    quoteContainer.style.display = 'flex'; // Show the quote element
});

closeIcon.addEventListener('click', () => {
  const quoteContainer = document.querySelector('.quote-container');
  quoteContainer.style.display = 'none'; // Hide the quote element
});