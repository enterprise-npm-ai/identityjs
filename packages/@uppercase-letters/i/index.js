const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_I = 73
module.exports = fromCharCode(CHARACTER_CODE_I) // Export the uppercase letter "I"
