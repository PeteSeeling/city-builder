const skylineDropdown = document.getElementById('skyline-dropdown');
const skylineImageEl = document.getElementById('skyline-image');
const waterFrontDropdown = document.getElementById('waterfront-dropdown');
const waterFrontImageEl = document.getElementById('waterfront-image');
const castleDropdown = document.getElementById('castle-dropdown');
const castleImageEl = document.getElementById('castle-image');
const statsEl = document.getElementById('stats');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const sloganOutputEl = document.getElementById('slogan-output');
// let state
let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;

let slogans = [];

// set event listeners 
skylineDropdown.addEventListener('change', () => {

    const id = skylineDropdown.value;
    skylineCount++;
    skylineImageEl.src = `./assets/Skyline-${id}.jpg`;
    displayStats();
});

waterFrontDropdown.addEventListener('change', () => {

    const id = waterFrontDropdown.value;
    waterfrontCount++;
    waterFrontImageEl.src = `./assets/waterfront-${id}.jpg`;
    displayStats();
});

castleDropdown.addEventListener('change', () => {

    const id = castleDropdown.value;
    castleCount++;
    castleImageEl.src = `./assets/castle-${id}.jpg`;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInputEl.value;

    slogans.push(newSlogan);

    sloganInputEl.value = '';
    displaySlogans();
});

function displayStats() {
    statsEl.textContent = `You have selected the skyline ${skylineCount} times, the waterfront ${waterfrontCount} times and the castle ${castleCount} times`;
}

function displaySlogans() {
  

    for (let slogan of slogans){
        const p = document.createElement('p');

        p.classList.add('add-slogan');
        p.textContent = slogan;
        sloganOutputEl.append(p);
        slogans = [];
        sloganInputEl.value = '';
       
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
