// import bubbleSort from "./sort-algo/bubble-sort.js";
// import selectionSort from "./sort-algo/selection-sort.js";
import quickSort from "./sort-algo/quick-sort.js";
import { findMax } from "./techniques/divide_conquer.js";
import { values } from "./graph-algo/Graph.js";
// import { maxSubarraySum } from "./techniques/slidingWIndow.js";
import { maxSubArray ,threeSum} from "./practice.js";
import { longestSubstringWithKDistinct,fruitsIntoBaskets ,permutationString} from "./techniques/slidingWIndow.js";
// const maxNum = findMax([64, 25, 86, 22, 11]);

// console.log(maxNum);
// const arr = [64, 25, 12, 22, 11]

//  quickSort(arr,0,arr.length-1);

// console.log(arr)

// console.log(values)

// const maxSum = maxSubarraySum([64, 25, 86, 22, 11], 3);

// console.log(maxSum);

// const {maxSum,resultArr} =  maxSubArray([10,12,16,17],4);

// console.log(resultArr,maxSum);

// const subStr =  longestSubstringWithKDistinct('araaci',2);

// console.log(subStr);

// const fruitLen =  fruitsIntoBaskets([1, 2, 1, 2, 3, 2, 2],4);
// console.log(fruitLen);


// const permu =  permutationString("ab","eidbaooo");

// console.log(permu);


 const result = threeSum([-1,0,1,2,-1,-4]);

 console.log(result);