// function isVowel(char) {
//   return 'aeiou'.includes(char);
// }

// function vowelCount(str) {
//   const vowelMap = new Map();
//   for (let char of str) {
//     let lowerCaseChar = char.toLowerCase();
//     if (isVowel(lowerCaseChar)) {
//       if (vowelMap.has(lowerCaseChar)) {
//         vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//       } else {
//         vowelMap.set(lowerCaseChar, 1);
//       }
//     }
//   }
//   return vowelMap;
// }

function vowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const counts = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      const count = counts.get(char) || 0;
      counts.set(char, count + 1);
    }
  }

  return counts;
}


const vowels = vowelCount('This is real question: To be or not to be.');
console.log(vowels);