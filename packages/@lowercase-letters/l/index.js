const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_L = 108
module.exports = fromCharCode(CHARACTER_CODE_L) // Export the lowercase letter "l"
