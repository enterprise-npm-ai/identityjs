const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_T = 84
module.exports = fromCharCode(CHARACTER_CODE_T) // Export the uppercase letter "T"
