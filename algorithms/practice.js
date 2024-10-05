// practice problems

export function maxSubArray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  let windowStart = 0;
  let maxARr = [];
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    while (windowSum > maxSum) {
      maxSum = windowSum;
      windowStart = i - k + 1;
    }
  }
  maxARr = arr.slice(windowStart, windowStart + k);

  return {
    resultArr: maxARr,
    maxSum,
  };
}

/**
 * 3sum problem
 * use 2 pointers
 */

export function threeSum(arr) {
  let result = [];

  //   sort the array
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    //  skip the duplicates for the first element
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    // use two pointers
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum == 0) {
        result.push([arr[i], arr[left], arr[right]]);
        // movev the pointers to skip over duplicates
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

/**
 * four sum problem leetcode
 */

export function fourSum(arr, target) {
  let result = [];
  // sort the array
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 3; i++) {
    // skip duplicates for the first element
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < arr.length - 2; j++) {
      // skip duplicates for the second element
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;

      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];

        if (sum === target) {
          result.push([arr[i], arr[j], arr[left], arr[right]]);

          // move the pointers to skip duplicates
          while (left < right && arr[left] === arr[left + 1]) left++;
          while (left < right && arr[right] === arr[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}


/**
 * remove element
 */


export function removeElem(arr, val) {
  let k = 0; // Index for the next position of a non-val element

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== val) {
          arr[k] = arr[i];
          k++;
      }
  }

  // Return the new length
  return k;
}

/**
 * 
 */