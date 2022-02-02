
// // Variables
// var emptyVariable;
// // var message = "Hello World";
// var firstName, lastName = "Asanbekova";

// // Number
// // JavaScript - математические операции не ведут к ошибке
// var exampleNumber1 = 123;
// var exampleNumber2 = 123.45;
// var exampleNumber3 = Infinity; // -Infinity
// var exampleNumber4 = NaN; //Not a Number

// // document.write(typeof exampleNumber1);

// // String
// var exmapleString1 = "Hello World";
// var exmapleString2 = 'Hello World';
// var exmapleString3 = `Hello World`;
// var exmapleString4 = "3";

// // Boolean
// var exampleBoolean1 = true;
// var exampleBoolean2 = false;

// // 
// var exampleNull = null; // пустая строка
// var exampeUndefined1; // строка не задана
// var exampeUndefined2 = undefined; // строка задана как незаданное значение

// // document.write

// // BigInt - Not Now
// var exampleBigInt = 1245369483057684n;
// // console.log(exampleBigInt);

// // Sumbol - Not now
// var exampleSymbol = Symbol("id");

// // OBJECTS
// var exampleObject1 = {};
// var exampleObject2 = Math;
// // document.write(typeof exampleObject1);


// // Output
// alert("Hello World");
// // var result = prompt("Hello World"); // string
// // var result = confirm("Hello World"); // boolean

// var exampleTypeConversation1 = 5 + "5";
// var exampleTypeConversation2 = 5 + 5 + "5";
// var exampleTypeConversation3 = false = 2;
// var exampleTypeConversation4 = new String(5);
// var exampleTypeConversation5 = new Number(" ");
// var exampleTypeConversation6 = Boolean(" ");
// // document.write(exampleTypeConversation1);

// // Math
// // Operand x=5+6;
// // Operands: 5, 6;
// // Operator: +;

// // Unari Operrator
// var x = 5;
// x = x + y;

// var exampleMath1 = 5 + 6;
// var exampleMath2 = 5 - 6;
// var exampleMath3 = 5 / 6;
// var exampleMath4 = 5 * 6;

// // Remainder
// var exampleMath5 = 5 % 2; // 1
// var exampleMath6 = 6 % 2; // 0

// // Eponent
// var exampleMath7 = 2 ** 5;

// // document.write(5 * (2 / 3) - 5);

// // Fast modify
// var exampleMath8 = 8;
// exampleMath8 += 5;
// exampleMath8 -= 3; // exampleMath = exampleMaths* - 3;

// // Increment / decrement
// var exampleMath9 = 0;
// exampleMath9++;
// exampleMath9--;
// ++exampleMath9;
// --exampleMath9;

// // Comparisons
// var exampleComparison1 = 6 > 5; // true
// var exampleComparison2 = 6 < 5; // false
// var exampleComparison3 = 6 >= 5; // true
// var exampleComparison4 = 6 <= 5; // false
// var exampleComparison5 = 6 === 5; // false
// var exampleComparison6 = 6 == 5; // false
// var exampleComparison7 = 6 !== 5; // true
// var exampleComparison8 = 6 != 5; // true
// var exampleComparison9 = "5" == 5; // true
// var exampleComparison9 = "5" != 5; // true

// document.write(5 === 5);

// // IF ELSE
// if (5 > 3) {
//   document.write("Hello World");
// }
// else {
//   document.write("Bye World");
// }
// /* 
// Если чайник кипит {
//   выключить чайник;
// }
// Иначе {
//   Проверить позже;
// }
// */
// if (isKettleBoiling()) {
//   switchGasOff();
// }
// else {
//   checkLater();
// }

// var age = prompt("How old are you?");
// var votingYears = age - 18;
// if (votingYears === NaN) {
//   alert("Wrong input. Numbers only.");
// }
// else {
//   alert("You could've vote for " + votingYears + " years");
// }

// var name = prompt("What's ur name?")  


// WHILE FOR
/* 
Если ползователь не ввёл число 13
  Спросить снова
*/
// var userNumber; // undefined
// while (userNumber != "3.14") {
//   // userNumber = prompt("Write the number PI")
// }

/*  
Начни с числа 1
Увеличивать число на 1
Пока число меньше или равно 3
*/
// for (var i=10; i>=1; i--) {
//   document.write(i);
// }


// Functions
function sayHello(name, timeOfDay) {
  document.write(`Hello ${name}, have a great ${timeOfDay}!<br>`);
}
sayHello("Lucas", "evening");
sayHello("Namjoon", "morning")


