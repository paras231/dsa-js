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
