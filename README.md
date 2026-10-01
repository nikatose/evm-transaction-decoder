# EVM Transaction Decoder

A lightweight TypeScript tool for identifying common EVM transaction function selectors.

The project focuses on understanding transaction calldata and recognizing frequently used ERC-20 function selectors.

## Features

* EVM transaction input validation
* Function selector extraction
* Common ERC-20 selector recognition
* Unknown selector detection
* TypeScript implementation
* Jest unit tests
* GitHub Actions CI
* No wallet connection required
* No API keys required

## Supported ERC-20 Functions

| Selector     | Function                                |
| ------------ | --------------------------------------- |
| `0xa9059cbb` | `transfer(address,uint256)`             |
| `0x095ea7b3` | `approve(address,uint256)`              |
| `0x23b872dd` | `transferFrom(address,address,uint256)` |
| `0x70a08231` | `balanceOf(address)`                    |
| `0xdd62ed3e` | `allowance(address,address)`            |
| `0x18160ddd` | `totalSupply()`                         |

## How It Works

An EVM transaction contains calldata.

The first 4 bytes of calldata are commonly used as the function selector.

For example:

```text
0xa9059cbb...
```

The tool extracts:

```text
Selector:
0xa9059cbb

Function:
transfer(address,uint256)

Category:
ERC-20
```

The current version uses a small local selector database.

## Example

Input:

```text
0xa9059cbb
```

Output:

```text
Selector: 0xa9059cbb
Function: transfer(address,uint256)
Category: ERC-20
```

Unknown selectors are reported as:

```text
Function: Unknown
Category: Unknown
```

## Project Structure

```text
evm-transaction-decoder
│
├── src/
│   ├── decoder.ts
│   └── index.ts
│
├── test/
│   └── decoder.test.ts
│
├── .github/
│   └── workflows/
│       └── test.yml
│
├── package.json
├── tsconfig.json
├── jest.config.js
├── README.md
├── .gitignore
└── LICENSE
```

## Development

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Build the TypeScript project:

```bash
npm run build
```

Run the compiled program:

```bash
npm start
```

## Roadmap

* Decode common function parameters
* Address parameter detection
* uint256 parameter decoding
* Dynamic ABI decoding
* Larger selector database
* Optional ABI input
* Transaction explorer integration

## Disclaimer

This project is intended for educational and development purposes.

It does not sign, send, or execute blockchain transactions.
