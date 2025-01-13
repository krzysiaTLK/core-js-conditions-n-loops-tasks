/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.y === king.y ||
    queen.x === king.x ||
    queen.x + queen.y === king.x + king.y ||
    (queen.x === queen.y && king.x === king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0 || a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const numStr = `${num}`;
  let numRoman = '';

  if (numStr[numStr.length - 2] === '1') {
    numRoman += 'X';
  } else if (numStr[numStr.length - 2] === '2') {
    numRoman += 'XX';
  } else if (numStr[numStr.length - 2] === '3') {
    numRoman += 'XXX';
  }
  if (numStr[numStr.length - 1] === '1') {
    numRoman += 'I';
  } else if (numStr[numStr.length - 1] === '2') {
    numRoman += 'II';
  } else if (numStr[numStr.length - 1] === '3') {
    numRoman += 'III';
  } else if (numStr[numStr.length - 1] === '4') {
    numRoman += 'IV';
  } else if (numStr[numStr.length - 1] === '5') {
    numRoman += 'V';
  } else if (numStr[numStr.length - 1] === '6') {
    numRoman += 'VI';
  } else if (numStr[numStr.length - 1] === '7') {
    numRoman += 'VII';
  } else if (numStr[numStr.length - 1] === '8') {
    numRoman += 'VIII';
  } else if (numStr[numStr.length - 1] === '9') {
    numRoman += 'IX';
  }
  return numRoman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
// function convertNumberToString(/* numberStr */) {
//   throw new Error('Not implemented');
// }
function convertNumberToString(numberStr) {
  let newString = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    let num = '';
    switch (numberStr[i]) {
      case '1':
        num = 'one';
        break;
      case '2':
        num = 'two';
        break;
      case '3':
        num = 'three';
        break;
      case '4':
        num = 'four';
        break;
      case '5':
        num = 'five';
        break;
      case '6':
        num = 'six';
        break;
      case '7':
        num = 'seven';
        break;
      case '8':
        num = 'eight';
        break;
      case '9':
        num = 'nine';
        break;
      case '0':
        num = 'zero';
        break;
      case '-':
        num = 'minus';
        break;
      case '.':
      case ',':
        num = 'point';
        break;
      default:
        num = '';
    }
    newString += (i > 0 ? ' ' : '') + num;
  }

  return newString;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === `${digit}`) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

// function sortByAsc(arr) {
//   const n = arr.length;
//   const newArr = new Array(arr.length);
//   for (let i = 0; i < n - i; i += 1) {
//     for (let j = 0; j < n - i - 1; j += 1) {
//       if (arr[j] > arr[j + 1]) {
//         const num = arr[j];
//         newArr[j] = newArr[j + 1];
//         newArr[j + 1] = num;
//       }
//     }
//   }
//   return newArr;
// }

// function sortByAsc(inputArr) {
//   function merge(arr, start, mid, end) {
//     const temp = [];
//     let i = start;
//     let j = mid;
//     let k = 0;

//     while (i < mid && j < end) {
//       if (arr[i] <= arr[j]) {
//         temp[k] = arr[i];
//         i += 1;
//       } else {
//         temp[k] = arr[j];
//         j += 1;
//       }
//       k += 1;
//     }

//     while (i < mid) {
//       temp[k] = arr[i];
//       i += 1;
//       k += 1;
//     }

//     while (j < end) {
//       temp[k] = arr[j];
//       j += 1;
//       k += 1;
//     }

//     const result = [];
//     for (let l = 0; l < arr.length; l += 1) {
//       if (l >= start && l < start + temp.length) {
//         result[l] = temp[l - start];
//       } else {
//         result[l] = arr[l];
//       }
//     }

//     return result;
//   }

//   function mergeSort(arr, start, end) {
//     if (end - start <= 1) return arr;

//     const mid = Math.floor((start + end) / 2);

//     const leftSorted = mergeSort(arr, start, mid);

//     return merge(leftSorted, start, mid, end);
//   }

//   const arrCopy = [];
//   for (let i = 0; i < inputArr.length; i += 1) {
//     arrCopy[i] = inputArr[i];
//   }

//   const sortedArr = mergeSort(arrCopy, 0, arrCopy.length);

//   return sortedArr;
// }

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
// function shuffleChar(/* str, iterations */) {
//   throw new Error('Not implemented');
// }

// function shuffleChar(str, iterations) {
//   if (str.length <= 1 || iterations === 0) {
//     return str;
//   }

//   let result = str;

//   for (let i = 0; i < iterations; i += 1) {
//     const shuffled = new Array(str.length);
//     let evenIdx = 0;
//     let oddIdx = Math.ceil(str.length / 2);

//     for (let j = 0; j < str.length; j += 1) {
//       if (j % 2 === 0) {
//         shuffled[evenIdx] = result[j];
//         evenIdx += 1;
//       } else {
//         shuffled[oddIdx] = result[j];
//         oddIdx += 1;
//       }
//     }

//     result = '';
//     for (let k = 0; k < str.length; k += 1) {
//       result += shuffled[k];
//     }
//   }

//   return result;
// }

function shuffleChar(str, iterations) {
  if (str.length === 1 || iterations === 0) {
    return str;
  }
  let str2 = str;
  for (let i = 0; i < iterations; i += 1) {
    let start = '';
    let end = '';
    for (let j = 0; j < str2.length; j += 1) {
      if (j % 2 === 0) {
        start += str2[j];
      } else {
        end += str2[j];
      }
    }
    str2 = start + end;
  }
  return str2;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
