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
const result1 = numberIdentity(59)

// Returns: 5000
const result2 = numberIdentity(5000)

// Returns: 0 (this function returns 0 for anything that isn't an integer)
const result3 = numberIdentity(0.3)

// Returns: -67
const result4 = numberIdentity(-67)

// Returns: 0 (this function returns 0 for anything that isn't a finite number)
const result5 = numberIdentity("not a number")

// Returns: 0
const result6 = numberIdentity(NaN)

// Returns: 0
const result7 = numberIdentity(Infinity)
```

## Testing
We have 100% test coverage with Mocha.

## License
UNLICENSE. You are free to do whatever you want with this.