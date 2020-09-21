// Class properties

class Counter {
  // without constructor
  count = 0;


  inc = () => {
    this.count += Counter.incrementStep;
    console.log(this.count);
  }
  // static field
  static incrementStep = 2;

  //static method
  static incrementAll = function(arr) {
    arr.forEach((c)=> c.inc());
  };
}

const cnt = new Counter();

console.log(cnt.count);
cnt.inc();

setTimeout(cnt.inc, 1000);
