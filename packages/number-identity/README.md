# 🆔 `number-identity`

## What's this?

This project provides a robust, highly modular, and massively dependent implementation of the simple number identity function (`f(x) = x`). We believe in the principle of **10x Engineering**: why use a single line of JavaScript when you can use hundreds of independently published packages? Learn more at [the 10x'ly Website](https://10xengineersqualityprogramming.github.io) today.

This package is part of [identity.js](https://github.com/10xEngineersQualityProgramming/identity)

## Installation

Due to the exhaustive nature of our dependencies, installation may take a moment.

NPM:
```bash
npm install @identity-js/number-identity
```

Yarn:

```bash
yarn add @identity-js/number-identity
```

## Usage
```js
const numberIdentity = require('@identity-js/number-identity')

// Returns: 59
const result1 = stringIdentity(59)

// Returns: 5000
const result2 = stringIdentity(5000)

// Returns: 0.3
const result3 = stringIdentity(0.3)

// Returns: -67
const result4 = stringIdentity(-67)

// Returns: 0 (this function returns 0 for anything that isn't a finite number)
const result5 = stringIdentity("not a number")
```

## Testing
We have 100% test coverage with Mocha.

## License
UNLICENSE. You are free to do whatever you want with this.