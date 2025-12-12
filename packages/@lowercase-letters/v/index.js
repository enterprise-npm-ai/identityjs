const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_V = 118
module.exports = fromCharCode(CHARACTER_CODE_V) // Export the lowercase letter "v"
