/*EX.2 start*/
function greet(){
  console.log('h1');
}
greet();

function logGreeting(fn){
  fn();
}
logGreeting(greet);
/*EX.2 end*/
