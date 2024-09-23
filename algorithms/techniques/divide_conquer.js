/**
 * practice dsa problems using divide and conquer technique
 */

/**
 * 1. Finding the maximum element in the array
 * approach-:
 * first sort the array
 * then find maximum element
 */

export function findMax(arr) {
  //  using bubble sort to sort the array
  let arrLength = arr.length;
  let isSwapped;
  for (let index = 0; index < arr.length; index++) {
    isSwapped = false;
    for (let j = 0; j < arrLength - index - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //   swap element
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }

  //   get max element

  const elem = arr[arr.length - 1];
  return elem;
}
