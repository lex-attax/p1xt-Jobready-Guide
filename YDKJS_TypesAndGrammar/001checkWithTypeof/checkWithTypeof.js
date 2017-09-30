
//Useing the saftey guard of typeof to
//safe check if FeatureXYZ is defined or not:

(function(){
  function FeatureXYZ() { /*.. my XYZ feature ..*/ }

  //include 'doSomethingCool(..)'
  function doSomethingCool(){
    var helper =
        (typeof FeatureXYZ !== "undefined") ?
        FeatureXYZ:
        function() { /*.. default feature ..*/};

    var val = helper();
    // ..
  }

  doSomethingCool();
})
