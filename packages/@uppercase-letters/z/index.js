const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_Z = 90
module.exports = fromCharCode(CHARACTER_CODE_Z) // Export the uppercase letter "Z"
