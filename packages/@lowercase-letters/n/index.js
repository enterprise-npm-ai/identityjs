const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_N = 110
module.exports = fromCharCode(CHARACTER_CODE_N) // Export the lowercase letter "n"
