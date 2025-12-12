const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_C = 99
module.exports = fromCharCode(CHARACTER_CODE_C) // Export the lowercase letter "c"
