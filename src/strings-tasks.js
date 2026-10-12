/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  return value.length;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

function repeatString(str, times) {
  return str.repeat(Math.max(0, times));
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);

  if (index === -1) {
    return str;
  }

  return str.slice(0, index) + str.slice(index + value.length);
}

function sumOfCodes(str = '') {
  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  return (str.match(/[aeiouy]/gi) || []).length;
}

function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  return normalized === normalized.split('').reverse().join('');
}

function findLongestWord(sentence) {
  const words = sentence.match(/\b\w+\b/g) || [];
  let longestWord = '';

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function invertCase(str) {
  return str
    .split('')
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      }

      return char.toUpperCase();
    })
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.replace('Hello, ', '').replace('!', '');
}

function unbracketTag(str) {
  return str.slice(1, -1);
}

function extractEmails(str) {
  return str.split(';');
}
function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    const base = code <= 90 ? 65 : 97;

    return String.fromCharCode(((code - base + 13) % 26) + base);
  });
}

function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];

  const suit = value.slice(-1);
  const rank = value.slice(0, -1);

  return suits.indexOf(suit) * 13 + ranks.indexOf(rank);
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
