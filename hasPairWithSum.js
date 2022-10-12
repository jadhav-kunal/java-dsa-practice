// check if array has a pair of elements which will sum up to target
// arr = [1,2,3,4] sum=8
// return false
//---------------
// arr = [1,2,4,4] sum=8
// return true

arr = [1, 6, 4, 5];
sum = 6;

function hasPairWithSum(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return console.log("true");
    }
    mySet.add(sum - arr[i]);
  }
  return console.log("false");
}

hasPairWithSum(arr, sum);
