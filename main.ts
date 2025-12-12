/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-12-12
 * @fileoverview Calculate the number of years it will take for a bank account to reach the amount required for post-secondary education.
 */

// Input
const startingAmount: number = parseInt(
  prompt("How much money will you start with?") || "0",
);

const yearlyRate: number = parseInt(
  prompt("Enter a yearly rate (as a percentage):") || "0",
);

const amountNeeded: number = parseInt(
  prompt("How much money will be needed for post-secondary education?") || "0",
);

// Processing
let currentAmount: number = startingAmount;

let years = 0;

while (currentAmount < amountNeeded) {
  currentAmount = currentAmount * (1 + yearlyRate / 100);
  years += 1;
}

// Output
console.log(
  `It will take ${years} years for the starting bank account to reach the required amount for post-secondary education.`,
);

console.log("\nDone.");
