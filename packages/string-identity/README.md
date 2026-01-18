# 🆔 `string-identity`

## What's this?

This project provides a robust, highly modular, and massively dependent implementation of the simple string identity function (`f(x) = x`). We believe in the principle of **10x Engineering**: why use a single line of JavaScript when you can use hundreds of independently published packages? Learn more at [the 10x'ly Website](https://10xengineersqualityprogramming.github.io) today.

This package is part of [identity.js](https://github.com/10xEngineersQualityProgramming/identity)

## Installation

Due to the exhaustive nature of our dependencies, installation may take a moment.

NPM:
```bash
npm install @identity-js/string-identity
```

Yarn:

```bash
yarn add @identity-js/string-identity
```

## Usage
```js
const stringIdentity = require('@identity-js/string-identity')

// Returns: "hello"
const result1 = stringIdentity("hello")

// Returns: "💯"
const result2 = stringIdentity("💯")

// Returns: "E"
const result3 = stringIdentity("E")

// Returns: "»"
const result4 = stringIdentity("»")
```

## Testing
We have 100% test coverage with Mocha.

## License
UNLICENSE. You are free to do whatever you want with this.