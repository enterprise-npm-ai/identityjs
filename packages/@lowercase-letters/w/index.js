const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_W = 119
module.exports = fromCharCode(CHARACTER_CODE_W) // Export the lowercase letter "w"
