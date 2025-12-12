const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_Y = 121
module.exports = fromCharCode(CHARACTER_CODE_Y) // Export the lowercase letter "y"
