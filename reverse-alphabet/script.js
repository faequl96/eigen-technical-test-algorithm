let alphabet = "NEGIE1";

function reverseAlphabet(alphabet) {
  console.log(alphabet);

  let alphabetSplited = alphabet.split("");
  console.log(alphabetSplited);

  let alphabetLengthMinus1 = alphabetSplited.length-1;
  console.log(alphabetLengthMinus1);

  let alphabetSliced1 = alphabetSplited.slice(0, alphabetLengthMinus1);
  console.log(alphabetSliced1);

  let alphabetSliced2 = alphabetSplited.slice(alphabetLengthMinus1, 6);
  console.log(alphabetSliced2);

  let alphabetReversed = alphabetSliced1.reverse();
  console.log(alphabetReversed);

  alphabetReversed.push(alphabetSliced2[0]);
  console.log(alphabetReversed);

  let alphabetJoined = alphabetReversed.join("");
  console.log(alphabetJoined);
}

reverseAlphabet(alphabet)
