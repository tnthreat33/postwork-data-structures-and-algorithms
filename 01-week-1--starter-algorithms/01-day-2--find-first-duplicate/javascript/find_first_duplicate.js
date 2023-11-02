function findFirstDuplicate(arr) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;
// Given an Array, find the first duplicate value that occurs. If there are no
// duplicates, return -1.

// ```js
// Input: [2, 1, 3, 3, 2]
// Output: 3

// Input: [1, 2, 3, 4]
// Output: -1
// ```
// Please add your pseudocode to this file
// And a written explanation of your solution
//test cases
//input: []
//output: -1
//input: [1,1,2,2]
//output: 1

//function dup takes an array as an argument
//create a new array 
//map through array for each number check if it is in the new array 
//if it isn't push the number to the array
//if it is then end the loop and return the number

function dub (arr){
  uniqueArr = new Set()

  for (const n in arr){
    if (uniqueArr.has(n)){
      return n;
    } else{
      uniqueArr.push(n)
    }
  }
  return -1 
}