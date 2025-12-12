const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_Q = 81
module.exports = fromCharCode(CHARACTER_CODE_Q) // Export the uppercase letter "Q"
