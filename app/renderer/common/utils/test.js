function Animal(name, age) {
  this.name= name;
  this.age =age;
  console.dir(this);
  }
function myNew() {
  let obj = new Object();
  let consractors =Array.from(arguments).slice(0,1)[0];
  console.log(arguments);
  // console.log(consractors);
  obj.__proto__ = consractors.prototype;
  // console.log(Array.from(arguments).slice(1,arguments.length));
  consractors.apply(obj,Array.from(arguments).slice(1))
  return obj;
}

let dog = myNew(Animal,"xyy","18")
let cat = new Animal('小猫', '14')
console.log(cat);
console.log(dog);