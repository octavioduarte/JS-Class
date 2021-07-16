/**
 * Write a for structure that will iterate through all integers from 0 to 100 .
   If the loop number is even, push the "evenNumbers" array, if it is odd, push
   the "oddNumbers" array
 * 
 */

// Tips: for - if - push 

const evenNumbers = []
const oddNumbers =  []

for (var i = 0; i <= 100; i++ )
    
  if ( i % 2 === 0 ){
  evenNumbers.push (i)
  }
  else {
  oddNumbers.push (i)
 }
 
console.log (evenNumbers,oddNumbers)




