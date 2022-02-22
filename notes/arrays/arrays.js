// Num Array
var arrayOfNumbers;
arrayOfNumbers = [4, 8, 15, 16, 23, 42];
// Any Array
var arrayOfNothing = [];
arrayOfNothing.push(123, "something", null);
// Union arrays
// Type is either a number or an array of strings
var numberOrStrings;
// Type is an array of items that are each either a number or a string
var stringCreators2;
// Tuples
function logPair(name, value) {
    console.log("".concat(name, " has ").concat(value));
}
var pairTupleCorrect = ["Amage", 1];
logPair.apply(void 0, pairTupleCorrect);
