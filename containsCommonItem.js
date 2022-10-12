// given 2 arrays let user know (true/false) whether these two arrays contain any common items

// const array1 = ['a','b','c','d']
// const array2 = ['x','y','i']
// return false
//----------------
// const array1 = ['a','b','c','X']
// const array2 = ['x','y','i']
// return true

// 2 parameters - arrays - no size limit
// return true/false

//bruteforce - 2 loops - O(n^2)

const array1 = ["a", "b", "c", "x"];
const array2 = ["x", "y", "i"];

function containsCommonItems(arr1, arr2) {
  // loop through arr1 and convert it to object where properties === items in array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);
  // loop through arr2 and check if it is present in created obj
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
//O(a+b)

containsCommonItems(array1, array2);
