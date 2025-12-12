const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_E = 69
module.exports = fromCharCode(CHARACTER_CODE_E) // Export the uppercase letter "E"
