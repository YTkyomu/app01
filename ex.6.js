/*EX.6 start*/
var addclosure = (() => {
  var counter = 0;
  return() => {
    counter += 1;
    console.log(counter);
  }
})();
addclosure();
addclosure();
addclosure();
/*EX.6 end*/
