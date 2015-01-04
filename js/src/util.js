// Inludes a list of utility methods including
// * Inherits
// * Defines the point class, which has a X and Y
// * Defines the vector class, which has a Vx and Vy


define(function(){
  var Util = {};

  Util.inherits = function(opts){
    //child and parent opts
    if (opts == undefined || opts.child === undefined || opts.parent === undefined){
      throw new Error ("Must provide all arguments to inherits");
    }
    var child = opts.child;
    var parent = opts.parent;

    function Surrogate(){};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
  }

  Util.Point = function(pointParams){
    this._x = pointParams.x;
    this._y = pointParams.y;
  }

  Util.Point.prototype.newPointAfterSpeed = function(vector){
    //adds the x movement and y movement and returns point


    return this;
  }

  Util.Point.prototype.distanceTo = function(otherPoint){

  }


  Util.Vector = function(vectorParams){
    this._vx = vectorParams.vx;
    this._vy = vectorParams.vy;
  }


  return Util;

});
