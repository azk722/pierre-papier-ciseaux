console.log("hello world")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
  

function testNum(a) {
    let result;
    if (a == 2) {
      result = 'oui';
    } else {
      result = 'non';
    }
    return result;
  }
  console.log(testNum(6));
  // Expected output: "non"
  
function addNUM(a,b){
    let result;
    result = a+b
    return result;
}
console.log(addNUM(15,6))

function mltNUM(a,b){
    let result;
    result = a*b
    return result;
}
console.log(mltNUM(2,6))


function mltNUM2(a,b){
    return a*b;
}
console.log(mltNUM2(2,6))

function divideNUM(a,b){
    return a/b;
}
console.log(divideNUM(6,3))