// Деструктуризация объектов

/* 
 *
*/
const person = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 27,
    role: 'superuser'
};

//old
const first_Name = person.firstName;

// new. Object destructuring
const {firstName, lastName, age} = person;
console.log(`Object destructuring. First name is ${firstName}, Last name is ${lastName}, age: ${age}`);

const person2 = {
    name: {
        first:'Bob',
        last: 'Dilan'
    },
    age: 33
}
//another syntax for more complicated objects
const {name: {first, last} } = person2;

console.log(`Anoter syntax Fist is: ${first}, Last is: ${last}`);

const {name: {first: firstName2, last: lastName2} } = person2;

console.log(`Anoter syntax with variable name changes Fist is: ${firstName2}, Last is: ${lastName2}`);


//with default values
let {role = 'user'} = person;

console.log(`default value: ${role}`);

//default objects

let {permissions: {role2 = 'user'} = {} } = person;

console.log(`In object are no permissions field. Trying to add default object and default value: ${role2}`);

// Деструктуризация аргументов функции
function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest'} = {}){
        console.log(`user: ${user}, port: ${port}, host: ${host}`);
}

connect({
    host: 'example.org',
    port: 1839,
    user: 'peter',
});

connect({});

connect({port: 1111});

connect();

//REST Element
const dict = {
    duck: 'quack',
    dog: 'woof',
    mouse: 'squeak'
}

const { duck, ...otherAnimals} = dict;

console.log(duck); //quack
console.log(otherAnimals); //{ dog: 'woof', mouse: 'squeak' }
