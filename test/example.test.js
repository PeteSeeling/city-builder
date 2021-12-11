// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createCountString } from './utils.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You have selected the skyline 1 times, the waterfront 2 times and the castle 3 times`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString(1, 2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
