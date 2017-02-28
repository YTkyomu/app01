/*EX.3 start*/
var greetMe = function(){
  console.log('Hi Tony!');
}
greetMe();
logGreeting(greetMe);

greetSam = () => console.log('Hi Sam!');
greetSam();

greetYou = name => console.log('Hi ' + name + '!');
greetYou('NTUE');

var square1 = function(num){return num*num};
var square2 = num => {return num*num};
var square3 = num => num*num;
console.log(square1(20));
console.log(square2(20));
console.log(square3(20));
/*EX.3 end*/
