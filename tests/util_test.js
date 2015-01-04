window.RPG = {};
window.RPG.Util = {};
window.RPG.Util.inherits = function(opts){
  //child and parent opts
  if (opts == undefined || opts.child === undefined || opts.parent === undefined){
    return;
  }
  var child = opts.child;
  var parent = opts.parent;

  function Surrogate(){};
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
}


var Animal = function(){
  this._name = "dog"
}

Animal.prototype.eat = function(){
  console.log("just ate");
}

var Dog = function(){}

window.RPG.Util.inherits({
  child: Dog,
  parent: Animal
})

var genericAnimal = new Animal();

var bobby = new Dog();
bobby.eat();

Animal.prototype.sleep = function(){
  console.log("just slept");
}

Dog.prototype.bark = function(){
  console.log("barkbark")
}

bobby.sleep();
bobby.bark();
