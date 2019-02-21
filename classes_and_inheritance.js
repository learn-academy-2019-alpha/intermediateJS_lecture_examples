// Classes and Inheritance

// Object Review

// object literal
let kitty = { name: 'Zorro', age: 4 }

// objects contain data and methods

// Class Syntax Review

// class Feline {
//   // set up initial values in constructor
//   constructor(pattern){
//     this.legs = 4,
//     this.fangs = true,
//     this.pattern = pattern
//   }
//
//   // set up sound action
//   sound(){
//     console.log('meow')
//   }
//
// }

// let cat1 = new Feline()
// let cat2 = new Feline()
// console.log(cat1);
// cat1.pattern = 'tabby'
// console.log(cat1);
// cat1.sound()
// console.log(cat2);

// The New Thing: Inheritance

class Feline {
  // set up initial values (data)
  constructor(legs){
    this.legs = legs,
    this.fangs = true
  }

  // set up sound (action)
  sound(){
    console.log('meow')
  }

}

class Tabby extends Feline {
  constructor(legs, feral){
    // runs the super's (Feline) constructor
    super(legs)
    this.pattern = 'Tabby',
    this.feral = feral
  }
}

class Grey extends Feline {

}




// let cat = new Feline(4)
// let tabby = new Tabby(true, 4)
// // let grey = new Grey()
// console.log('Feline instance', cat);
// console.log('Tabby instance', tabby);
// // console.log('Grey instance', grey);


class Dog {
  constructor(hairLength, size){
    this.hairLength =  hairLength,
    this.size = size,
    this.legs = 4
  }

  // creates the bark method for Dog class and any classes that extend from Dog
  bark(){
    console.log('BARK!')
  }


}

let aDog = new Dog('short', 'small')
console.log(aDog);
aDog.bark()

class Boxer extends Dog {
  constructor(hairLength, size, tail){
    super(hairLength, size)
    // the super call ^ runs constructor() from Dog class
    // constructor(hairLength, size){
    //   this.hairLength =  hairLength,
    //   this.size = size,
    //   this.legs = 4
    // }
    this.energyLevel = 'nuts',
    this.ears = 'floppy',
    this.tail = tail
  }

  // jump method is created just for Boxer class
  jump(){
    console.log('jump');
  }

}

let aBoxer = new Boxer('short', 'medium', true)
console.log(aBoxer.hairLength);
aBoxer.jump()
