const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_U = 85
module.exports = fromCharCode(CHARACTER_CODE_U) // Export the uppercase letter "U"
