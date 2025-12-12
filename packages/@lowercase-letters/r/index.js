const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_R = 114
module.exports = fromCharCode(CHARACTER_CODE_R) // Export the lowercase letter "r"
