const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_X = 120
module.exports = fromCharCode(CHARACTER_CODE_X) // Export the lowercase letter "x"
