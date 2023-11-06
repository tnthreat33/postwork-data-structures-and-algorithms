function selectionSort(arr) {
  // Loop through the entire array
  for (let i = 0; i < arr.length; i++) {
    // Assume the current element is the minimum
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted portion of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the current element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  // The array is now sorted
  return arr;

  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

//problem
  //take an array and check each number in the array to put them in order if there are 2 of the same for the one that shows up first first. 
// Please add your pseudocode to this file
  //loop through the array for the number of time of the number of index
  //create a new arr that houses the sorted array

// And a written explanation of your solution
