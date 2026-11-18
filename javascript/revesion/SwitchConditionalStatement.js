function output() {
  const mno = Number(document.getElementById("mno").value);
  console.log(mno);
  switch (mno) {
    case 1:
      console.log("Your Number is 1");
      break;
    case 2:
      console.log("Your Number is 2");
      break;
    case 3:
      console.log("Your Number is 3");
      break;
    case 4:
      console.log("Your Number is 4");
      break;
    case 5:
      console.log("Your Number is 5");
      break;
    default:
      console.log("Please Enter the numbers from 1 to 5");
  }
}
