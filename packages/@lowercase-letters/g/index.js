const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_G = 103
module.exports = fromCharCode(CHARACTER_CODE_G) // Export the lowercase letter "g"
