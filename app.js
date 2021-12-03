const skylineDropdown = document.getElementById("skyline-dropdown");
const skylineImageEl = document.getElementById("skyline-image");
const waterFrontDropdown = document.getElementById("waterfront-dropdown");
const waterFrontImageEl = document.getElementById("waterfront-image");
const castleDropdown = document.getElementById("castle-dropdown");
const castleImageEl = document.getElementById("castle-image");


// let state

// set event listeners 
skylineDropdown.addEventListener('change', () => {
const id = skylineDropdown.value;

skylineImageEl.src = `./assets/Skyline-${id}.jpg`

})

waterFrontDropdown.addEventListener('change', () => {
  const id = waterFrontDropdown.value;
  
  waterFrontImageEl.src = `./assets/waterfront-${id}.jpg`
  
  })

  castleDropdown.addEventListener('change', () => {
    const id = castleDropdown.value;
    
    castleImageEl.src = `./assets/castle-${id}.jpg`
    
    })

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
