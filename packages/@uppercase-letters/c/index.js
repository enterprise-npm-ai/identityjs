const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_C = 67
module.exports = fromCharCode(CHARACTER_CODE_C) // Export the uppercase letter "C"
