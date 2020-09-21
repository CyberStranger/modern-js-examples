
/*  стрелочные (arrow) функции
 * arrow функции не имеют своего this контекста, 
 * не имеют своего prototype
*/

function square(x){
    return x*x;
}

//arrow functions
const sq = (x) => x*x;

console.log(sq(3));


const arr = ['1', '3', '2', '4'];

const res = arr
  .map((el) => parseInt(el))
  .filter((num) => num%2)
  .reduce((max, value) => Math.max(max, value), 0);

  console.log(res);

//same thing with old syntax
const res2 = arr
  .map(function(el){
    return parseInt(el);
  })
  .filter(function(num){
    return num % 2;
  })
  .reduce(function(max, value){
    return Math.max(max, value);
  }, 0);

