if (!Caman && typeof exports == "object") {

  var Caman = {manip:{}};
  exports.plugins = Caman.manip;
}

(function (Caman) {

Caman.manip.posterize = function(adjust) {
  //adjust must be [2...255]
  console.log("Posterizing with "+adjust+" levels");
  var numOfAreas = 256 / adjust;
  var numOfValues = 255 / (adjust-1);
  return this.process( adjust, function posterizing(adjust, rgba) {
      var newR = Math.floor(Math.floor( rgba.r / numOfAreas ) * numOfValues);
      var newG = Math.floor(Math.floor( rgba.g / numOfAreas ) * numOfValues);
      var newB = Math.floor(Math.floor( rgba.b / numOfAreas ) * numOfValues);
      rgba.r = newR;
      rgba.g = newG;
      rgba.b = newB;
    return rgba;
  });
};

}(Caman));