// Functions
function sing(song: string) {
  console.log(`ߎ栤${song} ߎ栩`);
}

// Required Parameters
function singRequire(first: string, second: string) {
  console.log(`${first} / ${second}`);
}

// Optional Parameters
function singOptional(first?: string, second?: string) {
  console.log(`${first} / ${second}`);
}

// Default Parameters
function singDefault(first?: string, second = "default") {
  console.log(`${first} / ${second}`);
}

// Rest Parameters
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`ߎ栤{song} ߓ⠤{singer}`);
  }
}

singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");

// Function type
let callback: (songs: string[], count?: number) => number;

// Type is a function that returns an array of strings
let createStrings: () => string[];

// Type is an array of functions that each return a string
let stringCreators: (() => string)[];

// Return void
let songLogger: (song: string) => void;

songLogger = (song) => {
  console.log(`ߎ栤{songs} ߎ栩`);
};

songLogger("Heart of Glass");
