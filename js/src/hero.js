define(["./js/src/object.js",
        "./js/src/util.js"],
function(BasicObject, Util){
  var HeroObject = {};

  HeroObject.Hero = function(opts){
    this._hp = 10;
    this._str = 5;
    this._int = 5;
    BasicObject.mainObj.call(this, {
      position: opts.position,
      velocity: opts.velocity,
    })
  }

  Util.inherits({
    parent: BasicObject.mainObj,
    child: HeroObject.Hero
  })

})
