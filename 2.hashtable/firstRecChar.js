// Google question
// First recurring character

// given an array = [2,5,1,2,3,5,1,2,4]
// return 2

// given an array = [2,1,1,2,3,5,1,2,4]
// return 1

// given an array = [2,5,1,3,4]
// return undefined

function firstRecurringCharacter(arr){

    const map = {}
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
         if(arr[i]===arr[j]){
            return arr[i];
         }
        } 
    }
    return undefined;
}// O(n^2)

function firstRecurringCharacter2(arr){
    let map = {};
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]!== undefined ){
            return arr[i];
        }else{
            map[arr[i]] = i;
        }
    }
}// O(n)
const result = firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]);
console.log(result);