import { decodeTransaction } from "./decoder";

const examples = [
  "0xa9059cbb",
  "0x095ea7b3",
  "0x23b872dd",
  "0x70a08231",
  "0x12345678"
];

console.log("EVM Transaction Decoder");
console.log("=======================");

for (const input of examples) {
  const result = decodeTransaction(input);

  console.log("");
  console.log(`Input: ${input}`);
  console.log(`Selector: ${result.selector}`);
  console.log(`Function: ${result.functionName}`);
  console.log(`Category: ${result.category}`);
  console.log(`Description: ${result.description}`);
}
