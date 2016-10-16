/**
 * Check if selected value is a number
 * Simple approach with builtin
 */
function isNumber(value) {
  return NaN.isNaN(Number(value)) ? false : true
}

/**
 * Better approach without builtins
 * Should be optimized
 */
function isNumberH(value) {
  var chars = '0123456789'
  var dotHappened = false
  var status = true

  for (let i = 0; i < value.length; i++) {
    if (value[i] === '.') {
      if (!dotHappened) {
        dotHappened = true
        continue
      } else {
        status = false
        break
      }
    }

    if (chars.indexOf(value[i]) < 0) {
      status = false
      break
    }
  }

  return status
}

console.log(isNumberH('22.2'))
