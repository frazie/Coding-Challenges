// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// solution
function DNAStrand(dna){
    let testa = [...dna]
    let final = []
    for (let i = 0; i < testa.length; i++){
      if (testa[i] == 'A' ){
        final.push('T')
      }else if (testa[i] == 'T' ){
        final.push('A')
      }else if (testa[i] == 'C' ){
        final.push('G')
      }else if (testa[i] == 'G' ){
        final.push('C')
      }
    }
    
    console.log(final.join(''))
    return final.join('')
  }