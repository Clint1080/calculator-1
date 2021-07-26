const readline = require("readline");
const { inherits } = require("util");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("You can use +, -, /, *. For ex. + 2 4 will = 8");

console.log("sqrd is to square a number and sqrt is for square root");

console.log("** raised your first number to the power of the second number");

console.log("% will show the remainder of 2 numbers that you divide");

reader.question("What would you like to calculate?", function (input) {
  tokens = input.split(" ");

  mathSymbol = tokens[0];
  num1 = Number(tokens[1]);
  num2 = Number(tokens[2]);

  // console.log(`${num1}` + `${num2}`);
  if (mathSymbol === "+") {
    console.log(num1 + num2);
  } else if (mathSymbol === "-") {
    console.log(num1 - num2);
  } else if (mathSymbol === "/") {
    console.log(num1 / num2);
  } else if (mathSymbol === "*") {
    console.log(num1 * num2);
  } else if (mathSymbol === "sqrt") {
    console.log(`the square root of ${num1} is ${Math.sqrt(num1)}`);
  } else if (mathSymbol === "sqrd") {
    console.log(`${num1} squared is ${num1 * num1}`);
  } else if (mathSymbol === "**") {
    console.log(`${num1} to the power of ${num2} is ${num1 ** num2}`);
  } else if (mathSymbol === "%") {
    var remainder = num1 / num2;
    var fraction = remainder % 1;
    console.log(fraction);
  }

  // This line closes the connection to the command line interface.
  reader.close();
});
