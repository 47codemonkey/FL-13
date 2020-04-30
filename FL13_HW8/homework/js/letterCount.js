'use strict'

function letterCount(string, letterToCompare) {
    return string
      .toLowerCase()
      .split('')
      .filter((letter) => letter === letterToCompare).length;
  }
  
  letterCount("Maggy", "g") 
  letterCount("Barry", "b") 
  letterCount("", "z")
  