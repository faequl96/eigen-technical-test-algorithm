let sentence = "Saya sangat senang mengerjakan soal algoritma";

function longestSentence(sentence) {
  console.log(sentence);

  let sentenceSplited = sentence.split(" ");
  console.log(sentenceSplited);

  let sentenceLength = sentenceSplited.map((item) => item.length);
  console.log(sentenceLength);

  let sentenceSort = sentenceLength.sort((a, b) => b - a);
  console.log(sentenceSort);

  let sentenceLongest = sentenceSplited.filter((item) => item.length === sentenceSort[0]);
  console.log(`${sentenceLongest}: ${sentenceLongest[0].length} character`);
}

longestSentence(sentence)
