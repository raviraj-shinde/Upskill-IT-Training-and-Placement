//Basic Number Loops (1–15)

// 1. Print numbers from 1 to 10
function print1to10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 2. Print numbers from 10 to 1
function print10to1() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// 3. Print even numbers from 1 to 20
function printEven1to20() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

// 4. Print odd numbers from 1 to 20
function printOdd1to20() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}

// 5. Print first 10 natural numbers
function printNaturalNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 6. Sum of numbers from 1 to 10
function sum1to10() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(sum);
}

// 7. Print squares of numbers from 1 to 10
function printSquares() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
}

// 8. Print cubes of numbers from 1 to 10
function printCubes() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i * i);
  }
}

// 9. Print numbers divisible by 5 (1–50)
function divisibleBy5() {
  for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) console.log(i);
  }
}

// 10. Count digits of a number
function countDigits(num) {
  let count = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    count++;
  }
  console.log(count);
}

// 11. Reverse a number
function reverseNumber(num) {
  let rev = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    rev = rev * 10 + (num % 10);
  }
  console.log(rev);
}

// 12. Sum of digits of a number
function sumOfDigits(num) {
  let sum = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
  }
  console.log(sum);
}

// 13. Check if number is even or odd
function evenOrOdd(num) {
  for (let i = 1; i <= 1; i++) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
  }
}

// 14. Print multiplication table of a number
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// 15. Check if a number is prime
function checkPrime(num) {
  let isPrime = num > 1;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime ? "Prime" : "Not Prime");
}

/********************************************************************/

// 11. Table of 5
function tableOf5() {
  for (let i = 1; i <= 10; i++) console.log(`5 x ${i} = ${5 * i}`);
}

// 12. Table of any number
function table(n) {
  for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n * i}`);
}

// 13. Factorial
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  console.log(fact);
}

// 14. Fibonacci series
function fibonacci(n) {
  let a = 0,
    b = 1;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}

// 15. Prime check
function isPrime(n) {
  let prime = n > 1;
  for (let i = 2; i < n; i++) if (n % i === 0) prime = false;
  console.log(prime);
}

//B. Tables & Math (16–30)
// 16. Print multiplication table of 5
function tableOf5() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}

// 17. Print multiplication table of any number
function tableOfNumber(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// 18. Print tables from 1 to 5
function tables1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

// 19. Calculate factorial of a number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
}

// 20. Print factorials from 1 to n
function factorialSeries(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
    console.log(fact);
  }
}

// 21. Print Fibonacci series (n terms)
function fibonacciSeries(n) {
  let a = 0,
    b = 1;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

// 22. Print first n prime numbers
function printPrimes(n) {
  let count = 0;
  for (let num = 2; count < n; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
      count++;
    }
  }
}

// 23. Print prime numbers between 1 and 50
function primes1to50() {
  for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(num);
  }
}

// 24. Check if number is Armstrong
function checkArmstrong(num) {
  let temp = num;
  let sum = 0;
  let digits = 0;

  for (let t = num; t > 0; t = Math.floor(t / 10)) {
    digits++;
  }

  for (; temp > 0; temp = Math.floor(temp / 10)) {
    let d = temp % 10;
    sum += d ** digits;
  }

  console.log(sum === num ? "Armstrong" : "Not Armstrong");
}

// 25. Print Armstrong numbers from 1 to 500
function armstrong1to500() {
  for (let num = 1; num <= 500; num++) {
    let temp = num,
      sum = 0,
      digits = 0;

    for (let t = num; t > 0; t = Math.floor(t / 10)) digits++;

    for (; temp > 0; temp = Math.floor(temp / 10)) {
      let d = temp % 10;
      sum += d ** digits;
    }

    if (sum === num) console.log(num);
  }
}

// 26. Check if number is palindrome
function isPalindromeNumber(num) {
  let temp = num;
  let rev = 0;

  for (; temp > 0; temp = Math.floor(temp / 10)) {
    rev = rev * 10 + (temp % 10);
  }

  console.log(rev === num ? "Palindrome" : "Not Palindrome");
}

// 27. Print palindromes between 1 and 200
function palindrome1to200() {
  for (let num = 1; num <= 200; num++) {
    let temp = num,
      rev = 0;

    for (; temp > 0; temp = Math.floor(temp / 10)) {
      rev = rev * 10 + (temp % 10);
    }

    if (rev === num) console.log(num);
  }
}

// 28. Find LCM of two numbers
function findLCM(a, b) {
  let max = a > b ? a : b;
  for (let i = max; ; i++) {
    if (i % a === 0 && i % b === 0) {
      console.log(i);
      break;
    }
  }
}

// 29. Find HCF (GCD) of two numbers
function findHCF(a, b) {
  let hcf = 1;
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) hcf = i;
  }
  console.log(hcf);
}

// 30. Count number of factors of a number
function countFactors(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  console.log(count);
}

/*************************************************************/
//C. Star Patterns (31–55)

// 31. Square star pattern
function squareStar(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(n));
  }
}

// 32. Right angle triangle (left aligned)
function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i));
  }
}

// 33. Inverted right triangle
function invertedRightTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i));
  }
}

// 34. Left aligned triangle (spaces + stars)
function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
}

// 35. Inverted left aligned triangle
function invertedLeftTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
}

// 36. Pyramid star pattern
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
}

// 37. Inverted pyramid
function invertedPyramid(n) {
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
}

// 38. Half diamond (upper part)
function halfDiamondUp(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i));
  }
}

// 39. Half diamond (lower part)
function halfDiamondDown(n) {
  for (let i = n - 1; i >= 1; i--) {
    console.log("* ".repeat(i));
  }
}

// 40. Full diamond pattern
function diamond(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
  for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
}

// 41. Hollow square
function hollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) {
      console.log("* ".repeat(n));
    } else {
      console.log("* " + "  ".repeat(n - 2) + "*");
    }
  }
}

// 42. Hollow rectangle
function hollowRectangle(r, c) {
  for (let i = 1; i <= r; i++) {
    if (i === 1 || i === r) {
      console.log("* ".repeat(c));
    } else {
      console.log("* " + "  ".repeat(c - 2) + "*");
    }
  }
}

// 43. Hollow right triangle
function hollowRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) {
      console.log("* ".repeat(i));
    } else {
      console.log("* " + "  ".repeat(i - 2) + "*");
    }
  }
}

// 44. Hollow pyramid
function hollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      console.log(" ".repeat(n - i) + "*");
    } else if (i === n) {
      console.log("* ".repeat(n));
    } else {
      console.log(" ".repeat(n - i) + "* " + "  ".repeat(i - 2) + "*");
    }
  }
}

// 45. Cross star pattern
function crossStar(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += i === j || i + j === n + 1 ? "* " : "  ";
    }
    console.log(row);
  }
}

// 46. X star pattern
function xPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += j === i || j === n - i + 1 ? "* " : "  ";
    }
    console.log(row);
  }
}

// 47. Plus (+) star pattern
function plusPattern(n) {
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += i === mid || j === mid ? "* " : "  ";
    }
    console.log(row);
  }
}

// 48. Zigzag pattern
function zigzag(n) {
  for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += (i + j) % 4 === 0 || (i === 2 && j % 4 === 0) ? "* " : "  ";
    }
    console.log(row);
  }
}

// 49. Butterfly pattern
function butterfly(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i) + "  ".repeat(2 * (n - i)) + "* ".repeat(i));
  }
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i) + "  ".repeat(2 * (n - i)) + "* ".repeat(i));
  }
}

// 50. Sandglass pattern
function sandglass(n) {
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
  for (let i = 2; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
}

// 51. Number of stars increases by 2
function oddStarPyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

// 52. Inverted odd star pyramid
function invertedOddPyramid(n) {
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

// 53. Hollow odd pyramid
function hollowOddPyramid(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      console.log(" ".repeat(n - i) + "*");
    } else if (i === n) {
      console.log("*".repeat(2 * n - 1));
    } else {
      console.log(" ".repeat(n - i) + "*" + " ".repeat(2 * i - 3) + "*");
    }
  }
}

// 54. Staircase pattern
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i));
  }
}

// 55. Reverse staircase
function reverseStaircase(n) {
  for (let i = n; i >= 1; i--) {
    console.log("#".repeat(i));
  }
}

/****************************************************************/
// D. Number Patterns (56–75)

// 56. Simple number triangle
function numberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// 57. Same number in row
function sameNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

// 58. Continuous number triangle
function continuousNumber(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num++ + " ";
    }
    console.log(row);
  }
}

// 59. Reverse number triangle
function reverseNumberTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// 60. Left aligned number triangle
function leftAlignedNumber(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// 61. Pyramid number pattern
function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) row += j;
    for (let j = i - 1; j >= 1; j--) row += j;
    console.log(row);
  }
}

// 62. Inverted number pyramid
function invertedNumberPyramid(n) {
  for (let i = n; i >= 1; i--) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) row += j;
    for (let j = i - 1; j >= 1; j--) row += j;
    console.log(row);
  }
}

// 63. Odd number triangle
function oddNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let num = 1;
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num += 2;
    }
    console.log(row);
  }
}

// 64. Even number triangle
function evenNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let num = 2;
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num += 2;
    }
    console.log(row);
  }
}

// 65. Binary number triangle
function binaryTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let val = i % 2;
    for (let j = 1; j <= i; j++) {
      row += val + " ";
      val = val === 0 ? 1 : 0;
    }
    console.log(row);
  }
}

// 66. 0-1 pattern using index sum
function zeroOnePattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += ((i + j) % 2) + " ";
    }
    console.log(row);
  }
}

// 67. Floyd’s triangle
function floydTriangle(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num++ + " ";
    }
    console.log(row);
  }
}

// 68. Reverse Floyd’s triangle
function reverseFloyd(n) {
  let num = (n * (n + 1)) / 2;
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num-- + " ";
    }
    console.log(row);
  }
}

// 69. Pascal’s triangle (simple version)
function pascalTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let val = 1;
    for (let j = 0; j <= i; j++) {
      row += val + " ";
      val = (val * (i - j)) / (j + 1);
    }
    console.log(row);
  }
}

// 70. Number square
function numberSquare(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// 71. Constant number square
function constantNumberSquare(n) {
  for (let i = 1; i <= n; i++) {
    console.log((n + " ").repeat(n));
  }
}

// 72. Reverse number square
function reverseNumberSquare(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = n; j >= 1; j--) {
      row += j + " ";
    }
    console.log(row);
  }
}

// 73. Diagonal number pattern
function diagonalNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += i === j ? i + " " : "0 ";
    }
    console.log(row);
  }
}

// 74. X number pattern
function xNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += j === i || j === n - i + 1 ? i + " " : "0 ";
    }
    console.log(row);
  }
}

// 75. Hollow number square
function hollowNumberSquare(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += i === 1 || i === n || j === 1 || j === n ? j + " " : "  ";
    }
    console.log(row);
  }
}

/***************************************************************************/
//Others

// 76. Print first 10 natural numbers
function printNatural() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 77. Print sum of first n numbers
function sumFirstN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

// 78. Print count from n to 1
function countdown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

// 79. Print squares from 1 to n
function printSquares(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i * i);
  }
}

// 80. Print cubes from 1 to n
function printCubes(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i * i * i);
  }
}

// 81. Count digits in a number
function countDigits(num) {
  let count = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    count++;
  }
  console.log(count);
}

// 82. Reverse a number
function reverseNumber(num) {
  let rev = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    rev = rev * 10 + (num % 10);
  }
  console.log(rev);
}

// 83. Sum of digits
function sumDigits(num) {
  let sum = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
  }
  console.log(sum);
}

// 84. Check palindrome number
function checkPalindrome(num) {
  let temp = num;
  let rev = 0;

  for (; temp > 0; temp = Math.floor(temp / 10)) {
    rev = rev * 10 + (temp % 10);
  }

  console.log(num === rev ? "Palindrome" : "Not Palindrome");
}

// 85. Check Armstrong number
function checkArmstrong(num) {
  let temp = num;
  let sum = 0;
  let digits = 0;

  for (let t = num; t > 0; t = Math.floor(t / 10)) {
    digits++;
  }

  for (; temp > 0; temp = Math.floor(temp / 10)) {
    let d = temp % 10;
    sum += d ** digits;
  }

  console.log(sum === num ? "Armstrong" : "Not Armstrong");
}

// 86. Print even numbers till n
function printEven(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

// 87. Print odd numbers till n
function printOdd(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}

// 88. Count even numbers till n
function countEven(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) count++;
  }
  console.log(count);
}

// 89. Print multiplication table of n
function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// 90. Factorial of a number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
}

// 91. Check prime number
function checkPrime(n) {
  let prime = n > 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }
  console.log(prime ? "Prime" : "Not Prime");
}

// 92. Print numbers divisible by 3
function divisibleBy3(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) console.log(i);
  }
}

// 93. Print ASCII values A–Z
function printASCII() {
  for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
  }
}

// 94. Print pattern: 11111
function sameDigit(n) {
  let row = "";
  for (let i = 1; i <= n; i++) {
    row += "1";
  }
  console.log(row);
}

// 95. Count vowels in string
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) count++;
  }
  console.log(count);
}

// 96. Reverse a string
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
}

// 97. Check string palindrome
function stringPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(str === rev ? "Palindrome" : "Not Palindrome");
}

// 98. Count characters in string
function countChars(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  console.log(count);
}

// 99. Print stars in one line
function stars(n) {
  let row = "";
  for (let i = 1; i <= n; i++) {
    row += "*";
  }
  console.log(row);
}

// 100. Print numbers until break condition
function breakAtFive() {
  for (let i = 1; i <= 10; i++) {
    if (i === 6) break;
    console.log(i);
  }
}

/***************************************************************************/

//Example Input to Test
let arr = [10, 20, 5, 8, 15];
let obj = { a: 10, b: 20, c: "hello", d: 5 };

/***************************************************************************/

//Array Basics (101–107)

// 1. Print all elements of an array
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 2. Find sum of array elements
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

// 3. Find maximum element in array
function maxArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  console.log(max);
}

// 4. Find minimum element in array
function minArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  console.log(min);
}

// 5. Count even numbers in array
function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) count++;
  }
  console.log(count);
}

// 6. Reverse array (print only)
function reverseArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// 7. Search element in array
function searchElement(arr, key) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      found = true;
      break;
    }
  }
  console.log(found ? "Found" : "Not Found");
}

/***************************************************************************/
//Object Basics (108–111)

// 8. Print all object keys and values
function printObject(obj) {
  for (let key in obj) {
    console.log(key + " : " + obj[key]);
  }
}

// 9. Count number of properties in object
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  console.log(count);
}

// 10. Check if a key exists in object
function checkKey(obj, searchKey) {
  let exists = false;
  for (let key in obj) {
    if (key === searchKey) {
      exists = true;
      break;
    }
  }
  console.log(exists ? "Key exists" : "Key not exists");
}

// 11. Sum numeric values in object
function sumObjectValues(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  console.log(sum);
}

