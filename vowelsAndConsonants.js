const vowelsAndConsonants = s => {
  const vowelsArray = [ 'a', 'e', 'i', 'o', 'u']

  const isVowel = char => {
    for (let vowel of vowelsArray) {
      if (char === vowel) {
        return true
      } else {
        return false
      }
    }
  }

  const stringArr = s.split('')

  let resultArray

  for (let char of stringArr) {
    if (isVowel) {
      
    } else {
      
    }
  }
}