let input = ["xc", "dz", "bbb", "dz"];
let query = ["bbb", "ac", "dz"];

let containerArray = [];

for (let i = 0; i < query.length; i++) {
  function inputQuery(input, query) {
    let container = input.filter((item) => item === query[i]);
    containerArray.push(container);
  }
  inputQuery(input, query);
}

let outputNumber = "";

for (let i = 0; i < containerArray.length; i++) {
  outputNumber += containerArray[i].length;
  if (i != containerArray.length - 1) {
    outputNumber += ", ";
  }
}

let outputCause = "karena";

for (let i = 0; i < containerArray.length; i++) {
  outputCause += ` kata '${query[i]}' terdapat ${containerArray[i].length} pada INPUT`;
  if (i != containerArray.length - 1) {
    outputCause += ",";
  }
}

let output = `OUTPUT = [${outputNumber}] ${outputCause}`;

console.log(containerArray);

console.log(outputNumber);

console.log(outputCause);

console.log(output);
