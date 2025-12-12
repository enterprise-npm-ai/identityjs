const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_M = 109
module.exports = fromCharCode(CHARACTER_CODE_M) // Export the lowercase letter "m"
