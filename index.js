const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(function(tutorial) {
 
    let words = tutorial.split(' ');

    words = words.map(function(word) {
      let newWord = word.split('').map(function(char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      }).join('');

      return newWord.charAt(0).toUpperCase() + newWord.slice(1).toLowerCase();
    });

    return words.join(' ');
  });
}

console.log(titleCased());
