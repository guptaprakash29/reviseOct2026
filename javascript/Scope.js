let userNAme = "Praksh"; //Global Scope
console.log(userNAme);

{
  let address = "Ghaziabad";
  console.log(address);
  console.log(userNAme);
}
//console.log(address);

function getID() {
  let id = "A1"; //Function Scope
  console.log(id);
  console.log(userNAme);
  //   console.log(address);
}
getID();
// console.log(id);

function outerFunction() {
  let outerVariable = 121; //Lexical Scope
  function innerFunction() {
    console.log(outerVariable);
  }
  innerFunction();
}
outerFunction();
