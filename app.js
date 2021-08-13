// import functions and grab DOM elements
const ratButton = document.getElementById ('rat-button');
const ratScore = document.getElementById ('rat-score');
const possumButton = document.getElementById ('possum-button');
const possumScore = document.getElementById ('possum-score');
// initialize state

let points = 0;

// set event listeners 
ratButton.addEventListener('click', () => {
    points = points + 7;
    ratScore.textContent = points;
});

possumButton.addEventListener('click', () => {
    points = points + 7;
    possumScore.textContent = points;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
