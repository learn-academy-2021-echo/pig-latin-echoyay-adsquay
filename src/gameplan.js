// use .indexOf() which will give us the index of a value */i is case insensitive*
//.indexOf(/aeiouy/i) gives the index of the vowel and sometimes y
  
//Rule 1: If a word starts with a consonant or consonant group put the consonants at the end of the word and add "ay."
//  Example: Happy = appy + h + ay = appyhay
// Split word ==> .slice ==> pop it to the end and put it back together

const indexOfFirstVowel = (string) => {
  return string.search(/[aeiouy]/i)
}
const consonantWord = (string) => {
  return string.slice(indexOfFirstVowel(string)) + string.slice(0, indexOfFirstVowel(string)) + 'ay'
}
// console.log(consonantWord("chicken"));



//       Rule 2: If a word starts with a vowel add the word "way" at the end of the word.
//       Example: Awesome = Awesome + way = Awesomeway
const vowelFirst = (string) => {
  // console.log(string.search(/[aeiou]/i));
  if (string.search(/[aeiou]/i) === 0){
    return string + "way"
}
}
// console.log(vowelFirst("awesome"));
// console.log(vowelFirst("under"));
// console.log(vowelFirst("chicken"));

//       Rule 3: If a word starts with qu, then identify the first non-u vowel and move the preceding letters to the end and add "ay"
//       Example: Squeal = eal + squ + ay = ealsquay

const quVowel = (string) => {
  let location = string.indexOf("qu") + 2
  return string.slice(location) + string.slice(0, location) + 'ay'
}
// console.log(quVowel("queen"));
// console.log(quVowel("squid"));

//       Sometimes Y: If the first letter is a Y then it is a consonant, but if its after a consonant or consonant group then it is considered a vowel

const yFirst = (str) => {
  if (str.search(/y/i) === 0){
    return str.slice(1) + str.slice(0, 1) + 'ay'
  }
}
// console.log(yFirst("Yann"));


// Overall function that has an if statement for each possibility

const pigLatin = (string) => {
  if (string.search(/y/i) === 0) {
    return string.slice(1) + string.slice(0, 1) + 'ay'
  } else if (indexOfFirstVowel(string) === 0) {
    return string + "way"
  } else if (string.search(/"qu"/i)) {
    let location = string.indexOf("qu") + 2
    return string.slice(location) + string.slice(0, location) + 'ay'
  } else if (indexOfFirstVowel(string) !== 0) {
    return string.slice(indexOfFirstVowel(string)) + string.slice(0, indexOfFirstVowel(string)) + 'ay'
}
}

console.log(pigLatin("Arnett"));
console.log(pigLatin("Noah"));
console.log(pigLatin("Yann"));
console.log(pigLatin("squeal"));