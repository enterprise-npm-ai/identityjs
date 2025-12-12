const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_D = 100
module.exports = fromCharCode(CHARACTER_CODE_D) // Export the lowercase letter "d"
