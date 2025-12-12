const getIntrinsic = require("get-intrinsic")
const fromCharCode = getIntrinsic("%String.fromCharCode%")
const CHARACTER_CODE_H = 104
module.exports = fromCharCode(CHARACTER_CODE_H) // Export the lowercase letter "h"
