var assert = require('chai').assert
var stringIdentity = require('../index')

describe('stringIdentity', function () {
  describe('Lowercase Letters', function () {
    it('should return "a" when given "a"', function () {
      assert.strictEqual(stringIdentity('a'), 'a')
    })

    it('should return "b" when given "b"', function () {
      assert.strictEqual(stringIdentity('b'), 'b')
    })

    it('should return "c" when given "c"', function () {
      assert.strictEqual(stringIdentity('c'), 'c')
    })

    it('should return "d" when given "d"', function () {
      assert.strictEqual(stringIdentity('d'), 'd')
    })

    it('should return "e" when given "e"', function () {
      assert.strictEqual(stringIdentity('e'), 'e')
    })

    it('should return "f" when given "f"', function () {
      assert.strictEqual(stringIdentity('f'), 'f')
    })

    it('should return "g" when given "g"', function () {
      assert.strictEqual(stringIdentity('g'), 'g')
    })

    it('should return "h" when given "h"', function () {
      assert.strictEqual(stringIdentity('h'), 'h')
    })

    it('should return "i" when given "i"', function () {
      assert.strictEqual(stringIdentity('i'), 'i')
    })

    it('should return "j" when given "j"', function () {
      assert.strictEqual(stringIdentity('j'), 'j')
    })

    it('should return "k" when given "k"', function () {
      assert.strictEqual(stringIdentity('k'), 'k')
    })

    it('should return "l" when given "l"', function () {
      assert.strictEqual(stringIdentity('l'), 'l')
    })

    it('should return "m" when given "m"', function () {
      assert.strictEqual(stringIdentity('m'), 'm')
    })

    it('should return "n" when given "n"', function () {
      assert.strictEqual(stringIdentity('n'), 'n')
    })

    it('should return "o" when given "o"', function () {
      assert.strictEqual(stringIdentity('o'), 'o')
    })

    it('should return "p" when given "p"', function () {
      assert.strictEqual(stringIdentity('p'), 'p')
    })

    it('should return "q" when given "q"', function () {
      assert.strictEqual(stringIdentity('q'), 'q')
    })

    it('should return "r" when given "r"', function () {
      assert.strictEqual(stringIdentity('r'), 'r')
    })

    it('should return "s" when given "s"', function () {
      assert.strictEqual(stringIdentity('s'), 's')
    })

    it('should return "t" when given "t"', function () {
      assert.strictEqual(stringIdentity('t'), 't')
    })

    it('should return "u" when given "u"', function () {
      assert.strictEqual(stringIdentity('u'), 'u')
    })

    it('should return "v" when given "v"', function () {
      assert.strictEqual(stringIdentity('v'), 'v')
    })

    it('should return "w" when given "w"', function () {
      assert.strictEqual(stringIdentity('w'), 'w')
    })

    it('should return "x" when given "x"', function () {
      assert.strictEqual(stringIdentity('x'), 'x')
    })

    it('should return "y" when given "y"', function () {
      assert.strictEqual(stringIdentity('y'), 'y')
    })

    it('should return "z" when given "z"', function () {
      assert.strictEqual(stringIdentity('z'), 'z')
    })
  })

  describe('Uppercase Letters', function () {
    it('should return "A" when given "A"', function () {
      assert.strictEqual(stringIdentity('A'), 'A')
    })

    it('should return "B" when given "B"', function () {
      assert.strictEqual(stringIdentity('B'), 'B')
    })

    it('should return "C" when given "C"', function () {
      assert.strictEqual(stringIdentity('C'), 'C')
    })

    it('should return "D" when given "D"', function () {
      assert.strictEqual(stringIdentity('D'), 'D')
    })

    it('should return "E" when given "E"', function () {
      assert.strictEqual(stringIdentity('E'), 'E')
    })

    it('should return "F" when given "F"', function () {
      assert.strictEqual(stringIdentity('F'), 'F')
    })

    it('should return "G" when given "G"', function () {
      assert.strictEqual(stringIdentity('G'), 'G')
    })

    it('should return "H" when given "H"', function () {
      assert.strictEqual(stringIdentity('H'), 'H')
    })

    it('should return "I" when given "I"', function () {
      assert.strictEqual(stringIdentity('I'), 'I')
    })

    it('should return "J" when given "J"', function () {
      assert.strictEqual(stringIdentity('J'), 'J')
    })

    it('should return "K" when given "K"', function () {
      assert.strictEqual(stringIdentity('K'), 'K')
    })

    it('should return "L" when given "L"', function () {
      assert.strictEqual(stringIdentity('L'), 'L')
    })

    it('should return "M" when given "M"', function () {
      assert.strictEqual(stringIdentity('M'), 'M')
    })

    it('should return "N" when given "N"', function () {
      assert.strictEqual(stringIdentity('N'), 'N')
    })

    it('should return "O" when given "O"', function () {
      assert.strictEqual(stringIdentity('O'), 'O')
    })

    it('should return "P" when given "P"', function () {
      assert.strictEqual(stringIdentity('P'), 'P')
    })

    it('should return "Q" when given "Q"', function () {
      assert.strictEqual(stringIdentity('Q'), 'Q')
    })

    it('should return "R" when given "R"', function () {
      assert.strictEqual(stringIdentity('R'), 'R')
    })

    it('should return "S" when given "S"', function () {
      assert.strictEqual(stringIdentity('S'), 'S')
    })

    it('should return "T" when given "T"', function () {
      assert.strictEqual(stringIdentity('T'), 'T')
    })

    it('should return "U" when given "U"', function () {
      assert.strictEqual(stringIdentity('U'), 'U')
    })

    it('should return "V" when given "V"', function () {
      assert.strictEqual(stringIdentity('V'), 'V')
    })

    it('should return "W" when given "W"', function () {
      assert.strictEqual(stringIdentity('W'), 'W')
    })

    it('should return "X" when given "X"', function () {
      assert.strictEqual(stringIdentity('X'), 'X')
    })

    it('should return "Y" when given "Y"', function () {
      assert.strictEqual(stringIdentity('Y'), 'Y')
    })

    it('should return "Z" when given "Z"', function () {
      assert.strictEqual(stringIdentity('Z'), 'Z')
    })
  })

  describe('Combined Alphabets', function () {
    it('should return the full lowercase alphabet when given the combined lowercase string', function () {
      assert.strictEqual(stringIdentity('abcdefghijklmnopqrstuvwxyz'), 'abcdefghijklmnopqrstuvwxyz')
    })

    it('should return the full uppercase alphabet when given the combined uppercase string', function () {
      assert.strictEqual(stringIdentity('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    })
  })

  describe('FizzBuzz/CreashaksOrganzine Strings', function () {
    it('should return "fizz" when given "fizz"', function () {
      assert.strictEqual(stringIdentity('fizz'), 'fizz')
    })

    it('should return "buzz" when given "buzz"', function () {
      assert.strictEqual(stringIdentity('buzz'), 'buzz')
    })

    it('should return "fizzbuzz" when given "fizzbuzz"', function () {
      assert.strictEqual(stringIdentity('fizzbuzz'), 'fizzbuzz')
    })

    it('should return "creashaks" when given "creashaks"', function () {
      assert.strictEqual(stringIdentity('creashaks'), 'creashaks')
    })

    it('should return "organzine" when given "organzine"', function () {
      assert.strictEqual(stringIdentity('organzine'), 'organzine')
    })

    it('should return "creashaks organzine" when given "creashaks organzine"', function () {
      assert.strictEqual(stringIdentity('creashaks organzine'), 'creashaks organzine')
    })
  })

  describe('Emojis', function () {
    it('should return "💯" when given "💯"', function () {
      assert.strictEqual(stringIdentity('💯'), '💯')
    })

    it('should return "🔢" when given "🔢"', function () {
      assert.strictEqual(stringIdentity('🔢'), '🔢')
    })

    it('should return "🔡" when given "🔡"', function () {
      assert.strictEqual(stringIdentity('🔡'), '🔡')
    })

    it('should return "🛫" when given "🛫"', function () {
      assert.strictEqual(stringIdentity('🛫'), '🛫')
    })

    it('should return "⚗" when given "⚗"', function () {
      assert.strictEqual(stringIdentity('⚗'), '⚗')
    })

    it('should return "🐜" when given "🐜"', function () {
      assert.strictEqual(stringIdentity('🐜'), '🐜')
    })

    it('should return "🍎" when given "🍎"', function () {
      assert.strictEqual(stringIdentity('🍎'), '🍎')
    })

    it('should return "🚛" when given "🚛"', function () {
      assert.strictEqual(stringIdentity('🚛'), '🚛')
    })

    it('should return "📊" when given "📊"', function () {
      assert.strictEqual(stringIdentity('📊'), '📊')
    })

    it('should return "🏀" when given "🏀"', function () {
      assert.strictEqual(stringIdentity('🏀'), '🏀')
    })

    it('should return "🛀" when given "🛀"', function () {
      assert.strictEqual(stringIdentity('🛀'), '🛀')
    })

    it('should return "📘" when given "📘"', function () {
      assert.strictEqual(stringIdentity('📘'), '📘')
    })

    it('should return "📑" when given "📑"', function () {
      assert.strictEqual(stringIdentity('📑'), '📑')
    })

    it('should return "🍞" when given "🍞"', function () {
      assert.strictEqual(stringIdentity('🍞'), '🍞')
    })

    it('should return "💡" when given "💡"', function () {
      assert.strictEqual(stringIdentity('💡'), '💡')
    })

    it('should return "🏕" when given "🏕"', function () {
      assert.strictEqual(stringIdentity('🏕'), '🏕')
    })

    it('should return "🕯" when given "🕯"', function () {
      assert.strictEqual(stringIdentity('🕯'), '🕯')
    })

    it('should return "🚗" when given "🚗"', function () {
      assert.strictEqual(stringIdentity('🚗'), '🚗')
    })

    it('should return "🗂" when given "🗂"', function () {
      assert.strictEqual(stringIdentity('🗂'), '🗂')
    })

    it('should return "🐱" when given "🐱"', function () {
      assert.strictEqual(stringIdentity('🐱'), '🐱')
    })

    it('should return "💿" when given "💿"', function () {
      assert.strictEqual(stringIdentity('💿'), '💿')
    })

    it('should return "🍾" when given "🍾"', function () {
      assert.strictEqual(stringIdentity('🍾'), '🍾')
    })

    it('should return "🏁" when given "🏁"', function () {
      assert.strictEqual(stringIdentity('🏁'), '🏁')
    })

    it('should return "🌸" when given "🌸"', function () {
      assert.strictEqual(stringIdentity('🌸'), '🌸')
    })

    it('should return "🌇" when given "🌇"', function () {
      assert.strictEqual(stringIdentity('🌇'), '🌇')
    })

    it('should return "🏙" when given "🏙"', function () {
      assert.strictEqual(stringIdentity('🏙'), '🏙')
    })

    it('should return "🎬" when given "🎬"', function () {
      assert.strictEqual(stringIdentity('🎬'), '🎬')
    })

    it('should return "🕐" when given "🕐"', function () {
      assert.strictEqual(stringIdentity('🕐'), '🕐')
    })

    it('should return "🕙" when given "🕙"', function () {
      assert.strictEqual(stringIdentity('🕙'), '🕙')
    })

    it('should return "🕛" when given "🕛"', function () {
      assert.strictEqual(stringIdentity('🕛'), '🕛')
    })

    it('should return "🕒" when given "🕒"', function () {
      assert.strictEqual(stringIdentity('🕒'), '🕒')
    })

    it('should return "🕞" when given "🕞"', function () {
      assert.strictEqual(stringIdentity('🕞'), '🕞')
    })

    it('should return "🕠" when given "🕠"', function () {
      assert.strictEqual(stringIdentity('🕠'), '🕠')
    })

    it('should return "🕕" when given "🕕"', function () {
      assert.strictEqual(stringIdentity('🕕'), '🕕')
    })

    it('should return "🕡" when given "🕡"', function () {
      assert.strictEqual(stringIdentity('🕡'), '🕡')
    })

    it('should return "🕣" when given "🕣"', function () {
      assert.strictEqual(stringIdentity('🕣'), '🕣')
    })

    it('should return "🕘" when given "🕘"', function () {
      assert.strictEqual(stringIdentity('🕘'), '🕘')
    })

    it('should return "🍸" when given "🍸"', function () {
      assert.strictEqual(stringIdentity('🍸'), '🍸')
    })

    it('should return "☕️" when given "☕️"', function () {
      assert.strictEqual(stringIdentity('☕️'), '☕️')
    })

    it('should return "☄" when given "☄"', function () {
      assert.strictEqual(stringIdentity('☄'), '☄')
    })

    it('should return "🗜" when given "🗜"', function () {
      assert.strictEqual(stringIdentity('🗜'), '🗜')
    })

    it('should return "💻" when given "💻"', function () {
      assert.strictEqual(stringIdentity('💻'), '💻')
    })

    it('should return "🚧" when given "🚧"', function () {
      assert.strictEqual(stringIdentity('🚧'), '🚧')
    })

    it('should return "🎛" when given "🎛"', function () {
      assert.strictEqual(stringIdentity('🎛'), '🎛')
    })

    it('should return "👮" when given "👮"', function () {
      assert.strictEqual(stringIdentity('👮'), '👮')
    })

    it('should return "©️" when given "©️"', function () {
      assert.strictEqual(stringIdentity('©️'), '©️')
    })

    it('should return "🦀" when given "🦀"', function () {
      assert.strictEqual(stringIdentity('🦀'), '🦀')
    })

    it('should return "🌙" when given "🌙"', function () {
      assert.strictEqual(stringIdentity('🌙'), '🌙')
    })

    it('should return "🎌" when given "🎌"', function () {
      assert.strictEqual(stringIdentity('🎌'), '🎌')
    })

    it('should return "😢" when given "😢"', function () {
      assert.strictEqual(stringIdentity('😢'), '😢')
    })

    it('should return "🔮" when given "🔮"', function () {
      assert.strictEqual(stringIdentity('🔮'), '🔮')
    })

    it('should return "💱" when given "💱"', function () {
      assert.strictEqual(stringIdentity('💱'), '💱')
    })

    it('should return "🕶" when given "🕶"', function () {
      assert.strictEqual(stringIdentity('🕶'), '🕶')
    })

    it('should return "🎯" when given "🎯"', function () {
      assert.strictEqual(stringIdentity('🎯'), '🎯')
    })

    it('should return "🇩🇪" when given "🇩🇪"', function () {
      assert.strictEqual(stringIdentity('🇩🇪'), '🇩🇪')
    })

    it('should return "🏬" when given "🏬"', function () {
      assert.strictEqual(stringIdentity('🏬'), '🏬')
    })

    it('should return "🚪" when given "🚪"', function () {
      assert.strictEqual(stringIdentity('🚪'), '🚪')
    })

    it('should return "🍩" when given "🍩"', function () {
      assert.strictEqual(stringIdentity('🍩'), '🍩')
    })

    it('should return "🍳" when given "🍳"', function () {
      assert.strictEqual(stringIdentity('🍳'), '🍳')
    })

    it('should return "✴️" when given "✴️"', function () {
      assert.strictEqual(stringIdentity('✴️'), '✴️')
    })

    it('should return "✳️" when given "✳️"', function () {
      assert.strictEqual(stringIdentity('✳️'), '✳️')
    })

    it('should return "📩" when given "📩"', function () {
      assert.strictEqual(stringIdentity('📩'), '📩')
    })

    it('should return "🇪🇸" when given "🇪🇸"', function () {
      assert.strictEqual(stringIdentity('🇪🇸'), '🇪🇸')
    })

    it('should return "💶" when given "💶"', function () {
      assert.strictEqual(stringIdentity('💶'), '💶')
    })

    it('should return "👓" when given "👓"', function () {
      assert.strictEqual(stringIdentity('👓'), '👓')
    })

    it('should return "👀" when given "👀"', function () {
      assert.strictEqual(stringIdentity('👀'), '👀')
    })

    it('should return "👨‍👩‍👦" when given "👨‍👩‍👦"', function () {
      assert.strictEqual(stringIdentity('👨‍👩‍👦'), '👨‍👩‍👦')
    })

    it('should return "📽" when given "📽"', function () {
      assert.strictEqual(stringIdentity('📽'), '📽')
    })

    it('should return "🔥" when given "🔥"', function () {
      assert.strictEqual(stringIdentity('🔥'), '🔥')
    })

    it('should return "🚒" when given "🚒"', function () {
      assert.strictEqual(stringIdentity('🚒'), '🚒')
    })

    it('should return "🎆" when given "🎆"', function () {
      assert.strictEqual(stringIdentity('🎆'), '🎆')
    })

    it('should return "🐟" when given "🐟"', function () {
      assert.strictEqual(stringIdentity('🐟'), '🐟')
    })

    it('should return "🇦🇬" when given "🇦🇬"', function () {
      assert.strictEqual(stringIdentity('🇦🇬'), '🇦🇬')
    })

    it('should return "🇦🇲" when given "🇦🇲"', function () {
      assert.strictEqual(stringIdentity('🇦🇲'), '🇦🇲')
    })

    it('should return "🇦🇽" when given "🇦🇽"', function () {
      assert.strictEqual(stringIdentity('🇦🇽'), '🇦🇽')
    })

    it('should return "🇧🇿" when given "🇧🇿"', function () {
      assert.strictEqual(stringIdentity('🇧🇿'), '🇧🇿')
    })

    it('should return "🇨🇲" when given "🇨🇲"', function () {
      assert.strictEqual(stringIdentity('🇨🇲'), '🇨🇲')
    })

    it('should return "🇨🇽" when given "🇨🇽"', function () {
      assert.strictEqual(stringIdentity('🇨🇽'), '🇨🇽')
    })

    it('should return "🇪🇪" when given "🇪🇪"', function () {
      assert.strictEqual(stringIdentity('🇪🇪'), '🇪🇪')
    })

    it('should return "🇪🇸" when given "🇪🇸"', function () {
      assert.strictEqual(stringIdentity('🇪🇸'), '🇪🇸')
    })

    it('should return "🇬🇦" when given "🇬🇦"', function () {
      assert.strictEqual(stringIdentity('🇬🇦'), '🇬🇦')
    })

    it('should return "🇬🇺" when given "🇬🇺"', function () {
      assert.strictEqual(stringIdentity('🇬🇺'), '🇬🇺')
    })

    it('should return "🇯🇪" when given "🇯🇪"', function () {
      assert.strictEqual(stringIdentity('🇯🇪'), '🇯🇪')
    })

    it('should return "🇰🇭" when given "🇰🇭"', function () {
      assert.strictEqual(stringIdentity('🇰🇭'), '🇰🇭')
    })

    it('should return "🇰🇳" when given "🇰🇳"', function () {
      assert.strictEqual(stringIdentity('🇰🇳'), '🇰🇳')
    })

    it('should return "🇳🇦" when given "🇳🇦"', function () {
      assert.strictEqual(stringIdentity('🇳🇦'), '🇳🇦')
    })

    it('should return "🇳🇺" when given "🇳🇺"', function () {
      assert.strictEqual(stringIdentity('🇳🇺'), '🇳🇺')
    })

    it('should return "🇵🇫" when given "🇵🇫"', function () {
      assert.strictEqual(stringIdentity('🇵🇫'), '🇵🇫')
    })

    it('should return "🇵🇷" when given "🇵🇷"', function () {
      assert.strictEqual(stringIdentity('🇵🇷'), '🇵🇷')
    })

    it('should return "🇵🇹" when given "🇵🇹"', function () {
      assert.strictEqual(stringIdentity('🇵🇹'), '🇵🇹')
    })

    it('should return "🇸🇭" when given "🇸🇭"', function () {
      assert.strictEqual(stringIdentity('🇸🇭'), '🇸🇭')
    })

    it('should return "🇸🇴" when given "🇸🇴"', function () {
      assert.strictEqual(stringIdentity('🇸🇴'), '🇸🇴')
    })

    it('should return "🇸🇸" when given "🇸🇸"', function () {
      assert.strictEqual(stringIdentity('🇸🇸'), '🇸🇸')
    })

    it('should return "🇻🇺" when given "🇻🇺"', function () {
      assert.strictEqual(stringIdentity('🇻🇺'), '🇻🇺')
    })

    it('should return "🇼🇫" when given "🇼🇫"', function () {
      assert.strictEqual(stringIdentity('🇼🇫'), '🇼🇫')
    })

    it('should return "🇼🇸" when given "🇼🇸"', function () {
      assert.strictEqual(stringIdentity('🇼🇸'), '🇼🇸')
    })

    it('should return "⚜" when given "⚜"', function () {
      assert.strictEqual(stringIdentity('⚜'), '⚜')
    })

    it('should return "🌁" when given "🌁"', function () {
      assert.strictEqual(stringIdentity('🌁'), '🌁')
    })

    it('should return "👣" when given "👣"', function () {
      assert.strictEqual(stringIdentity('👣'), '👣')
    })

    it('should return "🌕" when given "🌕"', function () {
      assert.strictEqual(stringIdentity('🌕'), '🌕')
    })

    it('should return "⚱" when given "⚱"', function () {
      assert.strictEqual(stringIdentity('⚱'), '⚱')
    })

    it('should return "🐐" when given "🐐"', function () {
      assert.strictEqual(stringIdentity('🐐'), '🐐')
    })

    it('should return "⛳️" when given "⛳️"', function () {
      assert.strictEqual(stringIdentity('⛳️'), '⛳️')
    })

    it('should return "🍏" when given "🍏"', function () {
      assert.strictEqual(stringIdentity('🍏'), '🍏')
    })

    it('should return "🔫" when given "🔫"', function () {
      assert.strictEqual(stringIdentity('🔫'), '🔫')
    })

    it('should return "💇" when given "💇"', function () {
      assert.strictEqual(stringIdentity('💇'), '💇')
    })

    it('should return "🐹" when given "🐹"', function () {
      assert.strictEqual(stringIdentity('🐹'), '🐹')
    })

    it('should return "#️⃣" when given "#️⃣"', function () {
      assert.strictEqual(stringIdentity('#️⃣'), '#️⃣')
    })

    it('should return "🎧" when given "🎧"', function () {
      assert.strictEqual(stringIdentity('🎧'), '🎧')
    })

    it('should return "💓" when given "💓"', function () {
      assert.strictEqual(stringIdentity('💓'), '💓')
    })

    it('should return "♥️" when given "♥️"', function () {
      assert.strictEqual(stringIdentity('♥️'), '♥️')
    })

    it('should return "✔️" when given "✔️"', function () {
      assert.strictEqual(stringIdentity('✔️'), '✔️')
    })

    it('should return "🚁" when given "🚁"', function () {
      assert.strictEqual(stringIdentity('🚁'), '🚁')
    })

    it('should return "🌿" when given "🌿"', function () {
      assert.strictEqual(stringIdentity('🌿'), '🌿')
    })

    it('should return "🔪" when given "🔪"', function () {
      assert.strictEqual(stringIdentity('🔪'), '🔪')
    })

    it('should return "🌭" when given "🌭"', function () {
      assert.strictEqual(stringIdentity('🌭'), '🌭')
    })

    it('should return "🏨" when given "🏨"', function () {
      assert.strictEqual(stringIdentity('🏨'), '🏨')
    })

    it('should return "♨️" when given "♨️"', function () {
      assert.strictEqual(stringIdentity('♨️'), '♨️')
    })

    it('should return "🏠" when given "🏠"', function () {
      assert.strictEqual(stringIdentity('🏠'), '🏠')
    })

    it('should return "📥" when given "📥"', function () {
      assert.strictEqual(stringIdentity('📥'), '📥')
    })

    it('should return "ℹ️" when given "ℹ️"', function () {
      assert.strictEqual(stringIdentity('ℹ️'), 'ℹ️')
    })

    it('should return "😇" when given "😇"', function () {
      assert.strictEqual(stringIdentity('😇'), '😇')
    })

    it('should return "🏮" when given "🏮"', function () {
      assert.strictEqual(stringIdentity('🏮'), '🏮')
    })

    it('should return "🗾" when given "🗾"', function () {
      assert.strictEqual(stringIdentity('🗾'), '🗾')
    })

    it('should return "🏯" when given "🏯"', function () {
      assert.strictEqual(stringIdentity('🏯'), '🏯')
    })

    it('should return "😂" when given "😂"', function () {
      assert.strictEqual(stringIdentity('😂'), '😂')
    })

    it('should return "⌨" when given "⌨"', function () {
      assert.strictEqual(stringIdentity('⌨'), '⌨')
    })

    it('should return "*⃣" when given "*⃣"', function () {
      assert.strictEqual(stringIdentity('*⃣'), '*⃣')
    })

    it('should return "😗" when given "😗"', function () {
      assert.strictEqual(stringIdentity('😗'), '😗')
    })

    it('should return "😘" when given "😘"', function () {
      assert.strictEqual(stringIdentity('😘'), '😘')
    })

    it('should return "🍽" when given "🍽"', function () {
      assert.strictEqual(stringIdentity('🍽'), '🍽')
    })

    it('should return "🈁" when given "🈁"', function () {
      assert.strictEqual(stringIdentity('🈁'), '🈁')
    })

    it('should return "🏮" when given "🏮"', function () {
      assert.strictEqual(stringIdentity('🏮'), '🏮')
    })

    it('should return "😆" when given "😆"', function () {
      assert.strictEqual(stringIdentity('😆'), '😆')
    })

    it('should return "🍃" when given "🍃"', function () {
      assert.strictEqual(stringIdentity('🍃'), '🍃')
    })

    it('should return "🛅" when given "🛅"', function () {
      assert.strictEqual(stringIdentity('🛅'), '🛅')
    })

    it('should return "♎️" when given "♎️"', function () {
      assert.strictEqual(stringIdentity('♎️'), '♎️')
    })

    it('should return "🌩" when given "🌩"', function () {
      assert.strictEqual(stringIdentity('🌩'), '🌩')
    })

    it('should return "🍭" when given "🍭"', function () {
      assert.strictEqual(stringIdentity('🍭'), '🍭')
    })

    it('should return "💌" when given "💌"', function () {
      assert.strictEqual(stringIdentity('💌'), '💌')
    })

    it('should return "🖊" when given "🖊"', function () {
      assert.strictEqual(stringIdentity('🖊'), '🖊')
    })

    it('should return "🔍" when given "🔍"', function () {
      assert.strictEqual(stringIdentity('🔍'), '🔍')
    })

    it('should return "🀄️" when given "🀄️"', function () {
      assert.strictEqual(stringIdentity('🀄️'), '🀄️')
    })

    it('should return "👫" when given "👫"', function () {
      assert.strictEqual(stringIdentity('👫'), '👫')
    })

    it('should return "👨‍❤️‍💋‍👨" when given "👨‍❤️‍💋‍👨"', function () {
      assert.strictEqual(stringIdentity('👨‍❤️‍💋‍👨'), '👨‍❤️‍💋‍👨')
    })

    it('should return "👨‍👨‍👦‍👦" when given "👨‍👨‍👦‍👦"', function () {
      assert.strictEqual(stringIdentity('👨‍👨‍👦‍👦'), '👨‍👨‍👦‍👦')
    })

    it('should return "👳" when given "👳"', function () {
      assert.strictEqual(stringIdentity('👳'), '👳')
    })

    it('should return "👨‍👩‍👦" when given "👨‍👩‍👦"', function () {
      assert.strictEqual(stringIdentity('👨‍👩‍👦'), '👨‍👩‍👦')
    })

    it('should return "👨‍👩‍👧" when given "👨‍👩‍👧"', function () {
      assert.strictEqual(stringIdentity('👨‍👩‍👧'), '👨‍👩‍👧')
    })

    it('should return "👨‍👩‍👧‍👦" when given "👨‍👩‍👧‍👦"', function () {
      assert.strictEqual(stringIdentity('👨‍👩‍👧‍👦'), '👨‍👩‍👧‍👦')
    })

    it('should return "🕰" when given "🕰"', function () {
      assert.strictEqual(stringIdentity('🕰'), '🕰')
    })

    it('should return "🎤" when given "🎤"', function () {
      assert.strictEqual(stringIdentity('🎤'), '🎤')
    })

    it('should return "🖕" when given "🖕"', function () {
      assert.strictEqual(stringIdentity('🖕'), '🖕')
    })

    it('should return "🌌" when given "🌌"', function () {
      assert.strictEqual(stringIdentity('🌌'), '🌌')
    })

    it('should return "🤑" when given "🤑"', function () {
      assert.strictEqual(stringIdentity('🤑'), '🤑')
    })

    it('should return "🐵" when given "🐵"', function () {
      assert.strictEqual(stringIdentity('🐵'), '🐵')
    })

    it('should return "🌤" when given "🌤"', function () {
      assert.strictEqual(stringIdentity('🌤'), '🌤')
    })

    it('should return "🗻" when given "🗻"', function () {
      assert.strictEqual(stringIdentity('🗻'), '🗻')
    })

    it('should return "⛰" when given "⛰"', function () {
      assert.strictEqual(stringIdentity('⛰'), '⛰')
    })

    it('should return "🐁" when given "🐁"', function () {
      assert.strictEqual(stringIdentity('🐁'), '🐁')
    })

    it('should return "🍄" when given "🍄"', function () {
      assert.strictEqual(stringIdentity('🍄'), '🍄')
    })

    it('should return "📛" when given "📛"', function () {
      assert.strictEqual(stringIdentity('📛'), '📛')
    })

    it('should return "🚱" when given "🚱"', function () {
      assert.strictEqual(stringIdentity('🚱'), '🚱')
    })

    it('should return "👃" when given "👃"', function () {
      assert.strictEqual(stringIdentity('👃'), '👃')
    })

    it('should return "🅾️" when given "🅾️"', function () {
      assert.strictEqual(stringIdentity('🅾️'), '🅾️')
    })

    it('should return "🕉" when given "🕉"', function () {
      assert.strictEqual(stringIdentity('🕉'), '🕉')
    })

    it('should return "🔛" when given "🔛"', function () {
      assert.strictEqual(stringIdentity('🔛'), '🔛')
    })

    it('should return "🚖" when given "🚖"', function () {
      assert.strictEqual(stringIdentity('🚖'), '🚖')
    })

    it('should return "1️⃣" when given "1️⃣"', function () {
      assert.strictEqual(stringIdentity('1️⃣'), '1️⃣')
    })

    it('should return "📤" when given "📤"', function () {
      assert.strictEqual(stringIdentity('📤'), '📤')
    })

    it('should return "📦" when given "📦"', function () {
      assert.strictEqual(stringIdentity('📦'), '📦')
    })

    it('should return "🌴" when given "🌴"', function () {
      assert.strictEqual(stringIdentity('🌴'), '🌴')
    })

    it('should return "📎" when given "📎"', function () {
      assert.strictEqual(stringIdentity('📎'), '📎')
    })

    it('should return "🅿️" when given "🅿️"', function () {
      assert.strictEqual(stringIdentity('🅿️'), '🅿️')
    })

    it('should return "〽️" when given "〽️"', function () {
      assert.strictEqual(stringIdentity('〽️'), '〽️')
    })

    it('should return "🛂" when given "🛂"', function () {
      assert.strictEqual(stringIdentity('🛂'), '🛂')
    })

    it('should return "☎️" when given "☎️"', function () {
      assert.strictEqual(stringIdentity('☎️'), '☎️')
    })

    it('should return "🐷" when given "🐷"', function () {
      assert.strictEqual(stringIdentity('🐷'), '🐷')
    })

    it('should return "🐽" when given "🐽"', function () {
      assert.strictEqual(stringIdentity('🐽'), '🐽')
    })

    it('should return "🐖" when given "🐖"', function () {
      assert.strictEqual(stringIdentity('🐖'), '🐖')
    })

    it('should return "💊" when given "💊"', function () {
      assert.strictEqual(stringIdentity('💊'), '💊')
    })

    it('should return "🚓" when given "🚓"', function () {
      assert.strictEqual(stringIdentity('🚓'), '🚓')
    })

    it('should return "🐩" when given "🐩"', function () {
      assert.strictEqual(stringIdentity('🐩'), '🐩')
    })

    it('should return "💩" when given "💩"', function () {
      assert.strictEqual(stringIdentity('💩'), '💩')
    })

    it('should return "📯" when given "📯"', function () {
      assert.strictEqual(stringIdentity('📯'), '📯')
    })

    it('should return "📮" when given "📮"', function () {
      assert.strictEqual(stringIdentity('📮'), '📮')
    })

    it('should return "👛" when given "👛"', function () {
      assert.strictEqual(stringIdentity('👛'), '👛')
    })

    it('should return "🌈" when given "🌈"', function () {
      assert.strictEqual(stringIdentity('🌈'), '🌈')
    })

    it('should return "✋" when given "✋"', function () {
      assert.strictEqual(stringIdentity('✋'), '✋')
    })

    it('should return "🔁" when given "🔁"', function () {
      assert.strictEqual(stringIdentity('🔁'), '🔁')
    })

    it('should return "🔂" when given "🔂"', function () {
      assert.strictEqual(stringIdentity('🔂'), '🔂')
    })

    it('should return "🍚" when given "🍚"', function () {
      assert.strictEqual(stringIdentity('🍚'), '🍚')
    })

    it('should return "💍" when given "💍"', function () {
      assert.strictEqual(stringIdentity('💍'), '💍')
    })

    it('should return "🐓" when given "🐓"', function () {
      assert.strictEqual(stringIdentity('🐓'), '🐓')
    })

    it('should return "🌹" when given "🌹"', function () {
      assert.strictEqual(stringIdentity('🌹'), '🌹')
    })

    it('should return "🚨" when given "🚨"', function () {
      assert.strictEqual(stringIdentity('🚨'), '🚨')
    })

    it('should return "🏃" when given "🏃"', function () {
      assert.strictEqual(stringIdentity('🏃'), '🏃')
    })

    it('should return "🛰" when given "🛰"', function () {
      assert.strictEqual(stringIdentity('🛰'), '🛰')
    })

    it('should return "🎷" when given "🎷"', function () {
      assert.strictEqual(stringIdentity('🎷'), '🎷')
    })

    it('should return "🦂" when given "🦂"', function () {
      assert.strictEqual(stringIdentity('🦂'), '🦂')
    })

    it('should return "😱" when given "😱"', function () {
      assert.strictEqual(stringIdentity('😱'), '😱')
    })

    it('should return "㊙️" when given "㊙️"', function () {
      assert.strictEqual(stringIdentity('㊙️'), '㊙️')
    })

    it('should return "🚿" when given "🚿"', function () {
      assert.strictEqual(stringIdentity('🚿'), '🚿')
    })

    it('should return "📶" when given "📶"', function () {
      assert.strictEqual(stringIdentity('📶'), '📶')
    })

    it('should return "6️⃣" when given "6️⃣"', function () {
      assert.strictEqual(stringIdentity('6️⃣'), '6️⃣')
    })

    it('should return "🎿" when given "🎿"', function () {
      assert.strictEqual(stringIdentity('🎿'), '🎿')
    })

    it('should return "🔺" when given "🔺"', function () {
      assert.strictEqual(stringIdentity('🔺'), '🔺')
    })

    it('should return "😄" when given "😄"', function () {
      assert.strictEqual(stringIdentity('😄'), '😄')
    })

    it('should return "😸" when given "😸"', function () {
      assert.strictEqual(stringIdentity('😸'), '😸')
    })

    it('should return "😼" when given "😼"', function () {
      assert.strictEqual(stringIdentity('😼'), '😼')
    })

    it('should return "👾" when given "👾"', function () {
      assert.strictEqual(stringIdentity('👾'), '👾')
    })

    it('should return "❇️" when given "❇️"', function () {
      assert.strictEqual(stringIdentity('❇️'), '❇️')
    })

    it('should return "🎇" when given "🎇"', function () {
      assert.strictEqual(stringIdentity('🎇'), '🎇')
    })

    it('should return "☪" when given "☪"', function () {
      assert.strictEqual(stringIdentity('☪'), '☪')
    })

    it('should return "✡" when given "✡"', function () {
      assert.strictEqual(stringIdentity('✡'), '✡')
    })

    it('should return "🚂" when given "🚂"', function () {
      assert.strictEqual(stringIdentity('🚂'), '🚂')
    })

    it('should return "🍓" when given "🍓"', function () {
      assert.strictEqual(stringIdentity('🍓'), '🍓')
    })

    it('should return "🌻" when given "🌻"', function () {
      assert.strictEqual(stringIdentity('🌻'), '🌻')
    })

    it('should return "😎" when given "😎"', function () {
      assert.strictEqual(stringIdentity('😎'), '😎')
    })

    it('should return "🍣" when given "🍣"', function () {
      assert.strictEqual(stringIdentity('🍣'), '🍣')
    })

    it('should return "😓" when given "😓"', function () {
      assert.strictEqual(stringIdentity('😓'), '😓')
    })

    it('should return "😅" when given "😅"', function () {
      assert.strictEqual(stringIdentity('😅'), '😅')
    })

    it('should return "🕍" when given "🕍"', function () {
      assert.strictEqual(stringIdentity('🕍'), '🕍')
    })

    it('should return "🚕" when given "🚕"', function () {
      assert.strictEqual(stringIdentity('🚕'), '🚕')
    })

    it('should return "🍵" when given "🍵"', function () {
      assert.strictEqual(stringIdentity('🍵'), '🍵')
    })

    it('should return "🤔" when given "🤔"', function () {
      assert.strictEqual(stringIdentity('🤔'), '🤔')
    })

    it('should return "🖱" when given "🖱"', function () {
      assert.strictEqual(stringIdentity('🖱'), '🖱')
    })

    it('should return "™️" when given "™️"', function () {
      assert.strictEqual(stringIdentity('™️'), '™️')
    })

    it('should return "🔝" when given "🔝"', function () {
      assert.strictEqual(stringIdentity('🔝'), '🔝')
    })

    it('should return "🖲" when given "🖲"', function () {
      assert.strictEqual(stringIdentity('🖲'), '🖲')
    })

    it('should return "🚎" when given "🚎"', function () {
      assert.strictEqual(stringIdentity('🚎'), '🚎')
    })

    it('should return "🌷" when given "🌷"', function () {
      assert.strictEqual(stringIdentity('🌷'), '🌷')
    })

    it('should return "2️⃣" when given "2️⃣"', function () {
      assert.strictEqual(stringIdentity('2️⃣'), '2️⃣')
    })

    it('should return "👬" when given "👬"', function () {
      assert.strictEqual(stringIdentity('👬'), '👬')
    })

    it('should return "🈶" when given "🈶"', function () {
      assert.strictEqual(stringIdentity('🈶'), '🈶')
    })

    it('should return "🈸" when given "🈸"', function () {
      assert.strictEqual(stringIdentity('🈸'), '🈸')
    })

    it('should return "⛱" when given "⛱"', function () {
      assert.strictEqual(stringIdentity('⛱'), '⛱')
    })

    it('should return "🇺🇸" when given "🇺🇸"', function () {
      assert.strictEqual(stringIdentity('🇺🇸'), '🇺🇸')
    })

    it('should return "📼" when given "📼"', function () {
      assert.strictEqual(stringIdentity('📼'), '📼')
    })

    it('should return "🌋" when given "🌋"', function () {
      assert.strictEqual(stringIdentity('🌋'), '🌋')
    })

    it('should return "💒" when given "💒"', function () {
      assert.strictEqual(stringIdentity('💒'), '💒')
    })

    it('should return "🏋" when given "🏋"', function () {
      assert.strictEqual(stringIdentity('🏋'), '🏋')
    })

    it('should return "🐳" when given "🐳"', function () {
      assert.strictEqual(stringIdentity('🐳'), '🐳')
    })

    it('should return "💮" when given "💮"', function () {
      assert.strictEqual(stringIdentity('💮'), '💮')
    })

    it('should return "◻️" when given "◻️"', function () {
      assert.strictEqual(stringIdentity('◻️'), '◻️')
    })

    it('should return "🔳" when given "🔳"', function () {
      assert.strictEqual(stringIdentity('🔳'), '🔳')
    })

    it('should return "👩‍👩‍👧‍👦" when given "👩‍👩‍👧‍👦"', function () {
      assert.strictEqual(stringIdentity('👩‍👩‍👧‍👦'), '👩‍👩‍👧‍👦')
    })

    it('should return "🗺" when given "🗺"', function () {
      assert.strictEqual(stringIdentity('🗺'), '🗺')
    })

    it('should return "0️⃣" when given "0️⃣"', function () {
      assert.strictEqual(stringIdentity('0️⃣'), '0️⃣')
    })

    it('should return "something random" when given "something random"', function () {
      assert.strictEqual(stringIdentity('something random'), 'something random')
    })

    it('should return "" when given ""', function () {
      assert.strictEqual(stringIdentity(''), '')
    })
  })
})