const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_H = 72
module.exports = fromCharCode(CHARACTER_CODE_H) // Export the uppercase letter "H"
