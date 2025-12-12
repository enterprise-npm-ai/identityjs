const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_R = 82
module.exports = fromCharCode(CHARACTER_CODE_R) // Export the uppercase letter "R"
