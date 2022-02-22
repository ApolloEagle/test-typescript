// Object with type params
var poet = {
    born: 1830,
    name: "Emily Dickinson"
};
var poetName;
poetName = poet.name;
function takesFirstAndLastNames(names) { }
var hasBoth = {
    first: "Todo First",
    last: "Todo Last"
};
takesFirstAndLastNames(hasBoth);
// Object declaration
var myPoet = {
    born: 1928,
    name: "Maya Angelou"
};
var hasBothMethod = {
    property: function () { return ""; },
    method: function () {
        return "";
    }
};
hasBothMethod.property();
hasBothMethod.method();
var gymnast = {
    moves: ["TODO"],
    name: "Simone Biles"
};
function useGetsBoth(instance) {
    instance.giveEither();
    instance.giveNumber();
    instance.giveString();
}
