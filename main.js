const button = document.querySelector('.btn');

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
  const quoteElement = document.querySelector('.quote');

    quoteElement.textContent = quote; // Set the quote text
    quoteElement.style.display = 'block'; // Show the quote element
});