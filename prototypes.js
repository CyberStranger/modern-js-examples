// Prototypes


// const dog = {
//   name: 'dog',
//   voice: 'woof',
//  };

function Animal(name, voice){
  this.name = name;
  this.voice = voice;
}
Animal.prototype.say = function(){
  console.log(this.name, 'goes', this.voice);
}


const dog = new Animal('Dog', 'woof!');

const cat = new Animal('Cat', 'meow!');
dog.say();
cat.say();

/* Существует 3 способа создания прототипов
 * 1. Object.setPrototypeOf - ecma2015 не рекомендуется использовать. Очень медленно
 * 2. Object.create
 * 3. using new
*/