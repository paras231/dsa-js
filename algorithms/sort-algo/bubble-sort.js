/**
 * implement bubble sort using javascript
 */

function bubbleSort(arr) {
  let arrLength = arr.length;
  let isSwapped;
  for (let index = 0; index < arr.length; index++) {
    isSwapped = false;
    for (let j = 0; j < arrLength - index - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if(!isSwapped){
        break;
    }
  }
  console.log(arr);
}

export default bubbleSort;
