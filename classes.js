// Classes

// function Animal(name, voice){
//   this.name = name;
//   this.voice = voice;
// }
// Animal.prototype.say = function(){
//   console.log(this.name, 'goes', this.voice);
// }


// const dog = new Animal('Dog', 'woof!');
// dog.say();

class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  say(){
    console.log(this.name, 'goes', this.voice);
  }
}

class Bird extends Animal {
  constructor(name, voice, canFly) {
    // calling parent constructor
    super(name, voice);
    this.canFly = canFly;
  }
  // Method override
  say() {
    console.log(`${this.name} goes ${this.voice}, can fly: ${this.canFly}`);
  }
}

const duck = new Bird('Duck', 'quack!', true);
duck.say(); // Duck goes quack!
