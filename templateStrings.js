// Template literals 

const user = 'Bob';
const num = 17;

//old syntax
const txt = 'Hello, ' + user + ' you have ' + num + ' letters in your indox';
// new syntax with '`' 
const txt2 = `Hello, ${user} you have ${num} letters in your inbox`;

console.log(txt);
console.log(txt2);
console.log(`Today is ${Date.now().toString()}`);

const html = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>
  </ul>
  `;

  console.log(html);

