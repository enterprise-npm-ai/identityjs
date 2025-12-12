const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_J = 106
module.exports = fromCharCode(CHARACTER_CODE_J) // Export the lowercase letter "j"
