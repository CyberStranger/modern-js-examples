//Array destructuring

const fib = [1, 1, 2, 3, 5, 8, 13];

// first 3 elements from array
const [a, b, c] = fib;

console.log(a, b, c); // 1 1 2

// second and 4-th elements
const [, aa, , bb] = fib;

console.log(aa, bb) // 1 3

const line = [[10,17], [14, 7]];

const [ [p1x, p1y], [p2x, p2y] ] = line;

console.log(p1x, p1y, p2x, p2y); // 10 17 14 7


//default parameters
const people = ['chris', 'sandra',];

// third element has default parameter
const [first, second, third = 'guest'] = people;
console.log(first, second, third); // chris sandra guest

const dict = {
  duck: 'quack',
  dog: 'woof',
  mouse: 'squeak',
  hamster: 'squeak'
};

const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key])=> key);

console.log(res);


const shape = {
  type: 'segment',
  coordinates: {
      start:[10, 15],
      end: [17,15]
  }
};

const { coordinates: {start: [startX, startY], end:[endX, endY] }} = shape;

console.log(`Coordinates: startX: ${startX}, startY: ${startY}, endX: ${endX}, endY: ${endY},`);
