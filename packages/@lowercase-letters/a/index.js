const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_A = 97
module.exports = fromCharCode(CHARACTER_CODE_A) // Export the lowercase letter "a"
