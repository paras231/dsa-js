/**
 * implement selection sort using js
 */

function selectionSort(arr) {
  let n = arr.length;
  let i, j, min_idx;
  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
     
      if (arr[j] < arr[min_idx]) {
        console.log(arr[min_idx]);
        min_idx = j;
        //    swap element
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;

      }
      
    }
  }
  console.log(arr);
}

export default selectionSort;