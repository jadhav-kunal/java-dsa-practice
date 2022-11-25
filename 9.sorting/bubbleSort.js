const numbers = [99, 2, 74, 9, 1, 5, 34, 283, 12, 0];

//O(n^2)
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    console.log(i, " --> ", numbers);
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
