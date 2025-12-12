# `@identity-js/identity`

Introducing Identity.js, the 10x identity function.

The identity function, $I(x)$, is a mathematical function that always returns the same value that was used as its argument, i.e., $I(x) = x$. This utility is often used in functional programming paradigms.

At [10x'ly](https://10xengineersqualityprogramming.github.io), we are always looking for new opportunities to make 10x libraries and then it struck us: what about an identity function? This package spreads **10x'ness** into the simple concept of an identity function. It's not just an identity function, it's a **10x identity function**.

## 💾 Installation

This project is a standard Node.js module.

```bash
npm install @identity-js/identity
```

## 🚀 Usage

The function accepts a single argument of any type and returns that argument unchanged.

### Importing

```javascript
const identity = require("@identity-js/identity"); 
```

### Examples

| Input Type | Code | Output |
| :--- | :--- | :--- |
| **Number** | `identity(42)` | `42` |
| **String** | `identity('hello')` | `'hello'` |
| **Object** | `const obj = {a: 1}; identity(obj)` | `// returns the same object reference: {a: 1}` |
| **Null** | `identity(null)` | `null` |

## ✅ Testing

Tests are written using **Mocha**.

### Prerequisites
Clone this repository and install dependencies and dev-dependencies.

### Running Tests

Execute the test suite :

```
npm test
```

This will execute the tests to ensure the function works correctly across various data types (numbers, strings, objects, booleans, `null`, and `undefined`).

## ✍️ License

This project is licensed under the Unlicense.