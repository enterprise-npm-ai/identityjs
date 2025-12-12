const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_A = 65
module.exports = fromCharCode(CHARACTER_CODE_A) // Export the uppercase letter "A"
