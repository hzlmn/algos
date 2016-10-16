/**
 * Bruteforce algorithm,
 * should be optimized
 */
function hasSubstring(str, substr) {
  var state = 0
  var status = false

  /**
   * If equal immediattly returs true
   */
  if (str === substr) {
    return true
  }

  for (let i = 0; i < str.length; i++) {
    var char = str[i]
    if (state === substr.length) {
      status = true
      break
    }
    if (char === substr[state]) {
      state++
    } else {
      state = 0
    }
  }

  return status
}

console.log(hasSubstring('akas', 'aka'))
