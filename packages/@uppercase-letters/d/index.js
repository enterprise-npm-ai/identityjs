const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_D = 68
module.exports = fromCharCode(CHARACTER_CODE_D) // Export the uppercase letter "D"
