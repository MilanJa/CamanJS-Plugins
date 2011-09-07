/*global Caman: true, exports: true */

/*
 * NodeJS compatibility
 */
if (!Caman && typeof exports == "object") {
  var Caman = {manip:{}};
  exports.plugins = Caman.manip;
}

(function (Caman) {

Caman.manip.threshold = function(adjust) {
  return this.process( adjust, function threshold (adjust, rgba) {
  
    var luminance = (0.2126*rgba.r) + (0.7152*rgba.g) + (0.0722*rgba.b);
    
    if (luminance < adjust) {
      rgba.r = 0;
      rgba.g = 0;
      rgba.b = 0;
    } else {
      rgba.r = 255;
      rgba.g = 255;
      rgba.b = 255;
    }

    return rgba;
  });
};

}(Caman));