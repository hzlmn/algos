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
      console.log(state)
      status = true
      break
    }
    if (char === substr[state]) {
      state++
    }
  }

  return status
}

console.log(hasSubstring('akas', 'aka'))
