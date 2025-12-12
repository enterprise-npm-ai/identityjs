const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_L = 76
module.exports = fromCharCode(CHARACTER_CODE_L) // Export the uppercase letter "L"
