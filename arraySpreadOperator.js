/* Spread оператор похож на REST параметр функции
 * spread оператор раскладывает массив на список независимых элементов
*/
const arr = [1, 2, 3];
const arr2 = [4, 7, 8];


//old
const res = Math.max.apply(Math, arr)
console.log(res);


//spread
const res2 = Math.max(...arr);
console.log(res2);

//two arrays maximum
console.log(Math.max(...arr, ...arr2));


//shallow copy of array

const shallowCopy = [...arr, ...arr2];
console.log(shallowCopy);
