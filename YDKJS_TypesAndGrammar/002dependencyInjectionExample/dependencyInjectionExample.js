
//instead of doSomethingCool() inspecting implicitly
//for FeatureXYZ to be defined outside/around it, it would need to
//have the dependency explicitly passed in, like:

function doSomethingCool(FeatureXYZ){
  var helper = FeatureXYZ ||
    function(){ /*.. default feature ..*/ };
    var val = helper();
    // ..
}
