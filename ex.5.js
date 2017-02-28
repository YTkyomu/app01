/*EX.5 start*/
/*1.*/
function b1(){
  var myVar;
  console.log(myVar);//undefined
}
function a1() {
  var myVar = 1;
  b1();
  console.log(myVar);//1
}
var myVar = 2;
console.log(myVar);//2
a1();

/*2.*/
function a1() {
  var myVar = 1;
  function b1(){
    //var myVar;
    console.log(myVar);//1
  }
  b1();
  console.log(myVar);//1
}
var myVar = 2;
console.log(myVar);//2
a1();

/*3.*/
var firstname = 'Simon';
var addSurname = () =>{
  var surname = 'Holmes';
  var fullname = firstname + ' ' + surname;
  console.log(fullname);//Simon Holmes
}

/*4.*/
var firstname = 'Simon';
var addSurname = () =>{
  var surname = 'Holmes';
  var fullname = firstname + ' ' + surname;
  var firstname = 'David';
  console.log(fullname);//undefined Holmes
}

/*5.*/
var firstname = 'Simon';
var addSurname = () =>{
  var surname = 'Holmes';
  var fullname = firstname + ' ' + surname;
  firstname = 'David';
  console.log(fullname);//David Holmes
}
/*EX.5 end*/
