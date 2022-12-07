import promptSync from "prompt-sync";
import { add, subtract, multiply, divide } from "./calc.mjs";

function Calculator() {
  const prompt = promptSync();

  // Let's start with building a calculator.
  while (true) {
    console.log("Welcome to Calculator");
    const num1 = +prompt("Enter first number: ");
    const num2 = +prompt("Enter second number: ");

    const operation = prompt(
      "Enter operation [ + , - , * , /] OR Press any key to exit..."
    );
    if (operation === "+") {
      console.log("Result: " + add(num1, num2));
    } else if (operation === "-") {
      console.log(subtract(num1, num2));
    } else if (operation === "*") {
      console.log(multiply(num1, num2));
    } else if (operation === "/") {
      console.log(divide(num1, num2));
    } else {
      break;
    }
  }
}
export { Calculator };
