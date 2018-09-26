/*
  Task

  Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , 
  consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

  First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel 
  must be printed in the same order as it appeared in .
  Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
*/

const vowelsAndConsonants = s => {
  const isVowel = char => {
    const vowelsArray = ['a', 'e', 'i', 'o', 'u']
    let vowelTrue = false
    vowelsArray.map(vowel => {
      if (char === vowel) {
        vowelTrue = true
      }
    })
    return vowelTrue
  }

  const arrFromString = s.split('')

  let vowelsArr = []
  let consonantsArr = []

  for (let char of arrFromString) {
    if (isVowel(char)) {
      vowelsArr.push(char)
    } else {
      consonantsArr.push(char)
    }
  }

  vowelsArr.map(vowel => console.log(vowel))
  consonantsArr.map(consonant => console.log(consonant))
}

console.log(vowelsAndConsonants('javascriptloops'))