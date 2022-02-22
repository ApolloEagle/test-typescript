// Functions
function sing(song) {
    console.log("\u07CE\u6824".concat(song, " \u07CE\u6829"));
}
// Required Parameters
function singRequire(first, second) {
    console.log("".concat(first, " / ").concat(second));
}
// Optional Parameters
function singOptional(first, second) {
    console.log("".concat(first, " / ").concat(second));
}
// Default Parameters
function singDefault(first, second) {
    if (second === void 0) { second = "default"; }
    console.log("".concat(first, " / ").concat(second));
}
// Rest Parameters
function singAllTheSongs(singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, songs_1 = songs; _a < songs_1.length; _a++) {
        var song = songs_1[_a];
        console.log("\u07CE\u6824{song} \u07D3\u2824{singer}");
    }
}
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");
// Function type
var callback;
// Type is a function that returns an array of strings
var createStrings;
// Type is an array of functions that each return a string
var stringCreators;
// Return void
var songLogger;
songLogger = function (song) {
    console.log("\u07CE\u6824{songs} \u07CE\u6829");
};
songLogger("Heart of Glass");
