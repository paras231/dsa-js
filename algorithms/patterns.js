/**
 * DSA patterns help understanding to solve different kind of problems
 * each question is based on some pattern
 * learn the patterns to solve almost 80% of all the leetcode problems
 */

/**
 * 1st pattern
 * two pointers technique
 */

// questions

/**
 * remove duplicates from sorted array
 */
function removeDuplicates(arr) {
  // using two pointers techniques for this
  if (arr.length === 0) {
    return 0;
  }
  // pointer for unique element
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j]; // move the unique element forward
    }
  }
  return i + 1;
}

const output = removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]);

/**
 *  return the number of elements in nums which are not equal to val
 */
function removeElements(nums, val) {
  let i = 0; // Pointer for the position of non-val elements

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]; // Move non-val elements forward
      i++;
    }
  }

  return i; // i is the count of elements not equal to val
}

/**
 * move zero forward
 */

function moveZeros(nums) {
  let i = 0; // position of non 0 element

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j]; // move non zero element forward
      i++;
    }
  }

  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }

  return nums;
}
