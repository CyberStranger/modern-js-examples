//Spread operator for Objects

const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const opts = {
  user: 'john',
  password: 'utopia'
};

// es2015
const result = Object.assign({}, defaults, opts);

// es2018
const port = 8080
const res = {...defaults, 
  ...opts, 
  port,
connect(){
  
}};

console.log(res);
