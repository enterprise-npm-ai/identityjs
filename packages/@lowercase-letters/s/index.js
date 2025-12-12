const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_S = 115
module.exports = fromCharCode(CHARACTER_CODE_S) // Export the lowercase letter "s"
