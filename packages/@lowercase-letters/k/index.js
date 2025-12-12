const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_K = 107
module.exports = fromCharCode(CHARACTER_CODE_K) // Export the lowercase letter "k"
