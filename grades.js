const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
let grades = [] // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
  if( scores[i] >= 91){
     grades += "A"
  } else if ( scores[i] >= 81 ){
    grades += "B"
  }else if(scores[i] >= 71){
    grades += "C"
  }else if(scores[i] >= 61){
    grades += "D"
  } else if( scores[i] >= 50){
    grades += "F"
  }
}
console.log(grades)

// for(scores in grades){
//   grades.length
// }




    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
