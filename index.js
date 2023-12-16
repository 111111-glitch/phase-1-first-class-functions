const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

const expect = chai.expect;

// Function: receivesAFunction
function receivesAFunction(callback) {
  // Call the provided callback function
  callback();
}

// Function: returnsANamedFunction
function returnsANamedFunction() {
  // Return a named function
  return function namedFunction() {
    console.log("I am a named function!");
  };
}

// Function: returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function() {
    console.log("I am an anonymous function!");
  };
}
