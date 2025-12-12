const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_B = 66
module.exports = fromCharCode(CHARACTER_CODE_B) // Export the uppercase letter "B"
