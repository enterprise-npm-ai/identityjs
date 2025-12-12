const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_J = 74
module.exports = fromCharCode(CHARACTER_CODE_J) // Export the uppercase letter "J"
