const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_T = 116
module.exports = fromCharCode(CHARACTER_CODE_T) // Export the lowercase letter "t"
