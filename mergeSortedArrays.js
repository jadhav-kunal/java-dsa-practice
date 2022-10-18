// mergeSortedArrays([1,3,4,6,30],[0,4,8,12])
//[0,1,3,4,4,6,8,12,30]

// function mergeSortedArrays(arr1, arr2) {
//     const mergerArray = [];
//     let arr1Item = arr1[0];
//     let arr2Item = arr2[0];
//     let i = 1;
//     let j = 1;

//     if(arr1.length === 0){return arr2;}
//     if(arr2.length === 0){return arr1;}

//     while(arr1Item || arr2Item){
//         console.log(arr1Item, arr2Item)
//         if(!arr2Item || arr1Item<arr2Item){
//             mergerArray.push(arr1Item);
//             arr1Item = arr1[i];
//             i++
//         }else {
//             mergerArray.push(arr2Item);
//             arr2Item = arr2[j];
//             j++
//         }
//     }
//     console.log(mergerArray);
//     return mergerArray;
// }

// mergeSortedArrays([1,3,4,6,30],[0,4,8,12])

function mergeSortedArrays(array1, array2) {
    if (!array1.length && !array.length) {
    return [];
    } else if (!array1.length) {
    return array2;
    } else if (!array2.length) {
    return array1;
    }
    
    let mergedArray = [];
    const arraysTotalSize = array1.length + array2.length;
    let i = 0;
    let j = 0;
    while ((i + j) < (arraysTotalSize)) {
    if (array2[j] === undefined || array1[i] < array2[j]) {
    mergedArray.push(array1[i]);
    i++;
    } else if (array1[i] === undefined || array1[i] > array2[j]) {
    mergedArray.push(array2[j]);
    j++;
    } else if (array1[i] === array2[j]) {
    mergedArray.push(array1[i]);
    mergedArray.push(array2[j]);
    i++;
    j++;
    }
    }
    return mergedArray;
    }
    
    // Time Complexity: O(array1 + array2)
    
    console.log(mergeSortedArrays([0, 3, 4, 31, 32], [3, 4, 6, 30]));