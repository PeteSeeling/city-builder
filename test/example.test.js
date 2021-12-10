// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createCountString } from './app.js';
let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You have selected the skyline ${skylineCount} times, the waterfront ${waterfrontCount} times and the castle ${castleCount} times`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString(1, 2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
