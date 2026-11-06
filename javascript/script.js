if ("hello") {
  console.log("This WILL run"); // non-empty string → truthy
}
if (42) {
  console.log("This WILL run"); // non-zero number → truthy
}
if ([]) {
  console.log("This WILL run"); // empty array → truthy
}
if ({}) {
  console.log("This WILL run"); // empty object → truthy
}

if (0) {
  console.log("This will NOT run");
}
if ("") {
  console.log("This will NOT run");
}
let mno = 10;
if (mno) {
  console.log("This WILL run");
}
