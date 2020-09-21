//objects

const x = 10;
const y = 30;

// old
const point = {
  x: x, 
  y: y,
  draw: function(){
    // ...
  }
};

// ecma 2015
const p = {
  x, 
  y,
  draw(ctx){
    //...
  }
};

//dynamic keys
const prefix = '_blah_';
const data = {
  [prefix + 'name']: 'bob',
  [prefix + 'age']: 23,
};

console.log(data);

// Объединение объектов
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
}

const opts = {
  user: 'john',
  password: 'utopia'
}

const res = Object.assign({}, defaults, opts);
console.log(res);

//shallow copy
const person = {
  name: 'Bob',
  friends: ['Mark', 'Jacob']
};

const shallowCopy = Object.assign({}, person);
console.log(shallowCopy);
