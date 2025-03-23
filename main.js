const button = document.querySelector('.btn');
const closeIcon = document.querySelector('.icon');
const quoteContainer = document.querySelector('.quote-container');

let quotes = 
    ['If I cannot do great things, I can do small things in a great way.', 
    'Life is 10% what happens to us and 90% how we react to it.', 
    'The only way to achieve the impossible is to believe it is possible.', 
    'Opportunity is missed by most people because it is dressed in overalls and looks like work.', 
    'You cannot find peace by avoiding life.',
    'That it will never come again is what makes life so sweet.',
    'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.'];


function getQuote(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

button.addEventListener('click', () => {
  let quote = getQuote(quotes)
  const quoteElement = document.querySelector('.quote');

    quoteElement.textContent = quote; // Set the quote text
    quoteContainer.style.display = 'flex'; // Show the quote element
});

closeIcon.addEventListener('click', () => {
  quoteContainer.style.display = 'none'; // Hide the quote element
});