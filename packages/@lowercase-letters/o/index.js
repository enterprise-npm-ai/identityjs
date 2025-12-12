const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_O = 111
module.exports = fromCharCode(CHARACTER_CODE_O) // Export the lowercase letter "o"
