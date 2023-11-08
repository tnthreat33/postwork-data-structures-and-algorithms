function findShortestString(arr) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// ewrite the problem in your own words
  //look for the the shortest string that is passed in the array to the function
// 2. Validate that you understand the problem

// 3. Write your own test cases
  //console.log("expecting birdy")
  //console.log("=>", findShortestString(["Rexington", "Hazelnut", "dfkjd93434j"]))
// 4. Pseudocode
  //set the shortest variable to be sting[0]
  //iterate through the array and check if the string.length is greater than the variable
  //if it is big do nothing but add 1 to i
  //if it is smaller set the shortest to equal sting[i]
  //return shortest
// 5. Code!
function findShortestString(arr) {
   let shortest = arr[0]
   for(let i = 0; i <= arr.length; i++){
      if (shortest > arr[i]){
        shortest = arr[i]
      }
   }
   return shortest
}