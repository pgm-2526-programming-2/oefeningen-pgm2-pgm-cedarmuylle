const sentence = "This is a sentence.";

const [firstLetter, ...restOfSentence] = sentence;

console.log(firstLetter, restOfSentence.join(""));