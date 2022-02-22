console.log("Nothing is worth more than laughter.");
// String type
var firstName = "Bob";
var lastName;
// Object with string types
var cher = {
    firstName: "Cherilyn",
    lastName: "Sarkisian"
};
cher.firstName;
// Union
var mathematician = Math.random() > 0.5 ? 9001 : "Mark Goldberg";
// Declaring Union Types
var thinker = false;
if (Math.random() > 0.5) {
    thinker = "Susanne Langer";
}
// Assignment Narrowing
var admiral;
admiral = "Grace Hopper";
// Literal type
var philosopher = "Socrates";
// Truthiness Narrowing
var geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;
geneticist && geneticist.toUpperCase();
geneticist === null || geneticist === void 0 ? void 0 : geneticist.toUpperCase();
