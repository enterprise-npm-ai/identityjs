const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_P = 112
module.exports = fromCharCode(CHARACTER_CODE_P) // Export the lowercase letter "p"
