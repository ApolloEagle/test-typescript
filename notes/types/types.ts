console.log("Nothing is worth more than laughter.");
// String type
let firstName = "Bob";
let lastName: string;

// Object with string types
let cher = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
};
cher.firstName;

// Union
let mathematician = Math.random() > 0.5 ? 9001 : "Mark Goldberg";

// Declaring Union Types
let thinker: boolean | string = false;

if (Math.random() > 0.5) {
  thinker = "Susanne Langer";
}

// Assignment Narrowing
let admiral: number | string;

admiral = "Grace Hopper";

// Literal type
const philosopher = "Socrates";

// Truthiness Narrowing
let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;

geneticist && geneticist.toUpperCase();
geneticist?.toUpperCase();
