const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_F = 70
module.exports = fromCharCode(CHARACTER_CODE_F) // Export the uppercase letter "F"
