// Num Array
let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];

// Any Array
let arrayOfNothing = [];
arrayOfNothing.push(123, "something", null);

// Union arrays
// Type is either a number or an array of strings
let numberOrStrings: number | string[];

// Type is an array of items that are each either a number or a string
let stringCreators2: (number | string)[];

// Tuples
function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}
const pairTupleCorrect: [string, number] = ["Amage", 1];
logPair(...pairTupleCorrect);
