function multiplyBiggerNumByTwo(num1, num2) {
  return getBiggerSmaller(arguments) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return getBiggerSmaller(arguments) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${getBiggerSmaller(arguments)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${getBiggerSmaller(arguments, false)} pounds.`;
}

function getBiggerSmaller(Arguments, biggerButSmallerIfFalse = true) {  
  let args = Object.values(Arguments)  // Object to array
  console.log(args, Math.max(...args));
  if (biggerButSmallerIfFalse) return Math.max(...args);
  console.log();
  return Math.min(...args);
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};