define(["./js/src/util.js"],

function(Util){
  var mainObj = {};

  mainObj.Object = function(opts){
    // Options must include position (top left corner), velocity, radius
    // position is given as a pair of x, y
    this._position = opts.position;
    this._velocity = opts.velocity;
    this._radius = opts.radius;
  }

  mainObj.Object.prototype.move = function(){
    //recalculate new position
    this._pos = 
  }

  mainObj.Object.prototype.draw = function(ctx){
    //draws object on context
  }

  return mainObj;
})
