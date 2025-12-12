const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_M = 77
module.exports = fromCharCode(CHARACTER_CODE_M) // Export the uppercase letter "M"
