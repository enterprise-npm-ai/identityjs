const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_Q = 113
module.exports = fromCharCode(CHARACTER_CODE_Q) // Export the lowercase letter "q"
