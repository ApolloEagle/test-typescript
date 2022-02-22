// Object with type params
const poet = {
  born: 1830,
  name: "Emily Dickinson",
};

let poetName: string;
poetName = poet.name;

// Inteface to define object props
interface Poet {
  born: number;
  name: string;
}

// Usage
interface FirstAndLastNames {
  first: string;
  last: string;
}

function takesFirstAndLastNames(names: FirstAndLastNames) {}

const hasBoth = {
  first: "Todo First",
  last: "Todo Last",
};
takesFirstAndLastNames(hasBoth);

// Object declaration
const myPoet: Poet = {
  born: 1928,
  name: "Maya Angelou",
};

// Optional props
interface SomeOptionals {
  optional?: string;
  required: string | undefined;
}

// Read-only props
interface Messenger {
  readonly announcement: string;
}

// Methods
interface HasBothFunctionTypes {
  property: () => string;
  method(): string;
}

const hasBothMethod: HasBothFunctionTypes = {
  property: () => "",
  method() {
    return "";
  },
};

hasBothMethod.property();
hasBothMethod.method();

// Interface extensions
interface Athlete {
  name: string;
}

interface Gymnast extends Athlete {
  moves: string[];
}

let gymnast: Gymnast = {
  moves: ["TODO"],
  name: "Simone Biles",
};

// Multiple extensions
interface GivesNumber {
  giveNumber(): number;
}

interface GivesString {
  giveString(): string;
}

interface GivesBoth extends GivesNumber, GivesString {
  giveEither(): number | string;
}

function useGetsBoth(instance: GivesBoth) {
  instance.giveEither();
  instance.giveNumber();
  instance.giveString();
}
