// import functions and grab DOM elements
const ratButton = document.getElementById ('rat-button');
const ratScore = document.getElementById ('rat-score');
const possumButton = document.getElementById ('possum-button');
const possumScore = document.getElementById ('possum-score');
// initialize state

let ratPoints = 0;
let possumPoints = 0;

// set event listeners 
ratButton.addEventListener('click', () => {
    ratPoints = ratPoints + 7;
    ratScore.textContent = ratPoints;
});

possumButton.addEventListener('click', () => {
    possumPoints = possumPoints + 7;
    possumScore.textContent = possumPoints;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
