

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
    while(windowSum > maxSum) {
        maxSum = windowSum;
        windowStart = i - k + 1;
    }

  }
  maxARr =  arr.slice(windowStart,windowStart + k);

  return {
    resultArr:maxARr,
    maxSum
  };
}
