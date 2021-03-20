// reference type

var object1 = { value: 10 };
// object1 = Box1
var object2 = object1;
// object2 = Box1
var object3 = { value: 10 };
// object2 = Box2
// [] === [];  --> false

// context vs scope

// scope
function b() {
  let a = 4;
}
// console.log(a) ---> reference error
//context
const object4 = {
  a: function() {
    console.log(this);
  }
}

// instantiation
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`Hellooooo I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard('Hermione', 'Healer');
const wizard2 = new Wizard('Voldemort', 'Dark Magic');
