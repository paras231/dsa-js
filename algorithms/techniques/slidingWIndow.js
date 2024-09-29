/**
 * practice and implement sliding window technique
 * find more explanation here : https://dev.to/sanukhandev/the-sliding-window-technique-a-powerful-algorithm-for-javascript-developers-3nfm
 */

/**
 * find Maximum Sum of Subarray of Size k
 */

export function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // initial window sum (first k elements)
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // slide the window over the rest of the array

  for (let i = k; i < arr.length; i++) {
    // add new element and remove old element
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

/**
 * Subarray with a Sum Greater Than or Equal to S
 */

export function smallestSubSarr(arr, S) {
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    //  Add the next element to the window
    windowSum += arr[i];
    while (windowSum >= S) {
      //  update the smallest length
      minLength = Math.min(minLength, i - windowStart + 1);
      // subtract the element at the start of window
      windowSum -= arr[windowStart];
      // Move the start of the window to the right
      windowStart++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

/**
 * longest substring with k distinct character
 */

export function longestSubstringWithKDistinct(string, k) {
  let windowStart = 0;
  let maxLength = 0;
  let characterFrequency = {};

  //   loop through string
  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    let rightChar = string[windowEnd];
    // console.log(string[windowEnd]);
    // console.log(rightChar);
    if (!(rightChar in characterFrequency)) {
      characterFrequency[rightChar] = 0;
    }

    characterFrequency[rightChar]++;

    // shrink the window if  we have more than 'k' distinct characters

    while (Object.keys(characterFrequency).length > k) {
      let leftChar = string[windowStart];

      characterFrequency[leftChar]--;

      //  if count of left character is 0  , remove it from map

      if (characterFrequency[leftChar] === 0) {
        delete characterFrequency[leftChar];
      }
      windowStart++;
    }

    // calculate the maximum length of the window
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

/**
 * fruits into baskets
 */

export function fruitsIntoBaskets(arr, k) {
  let maxLength = 0;
  let windowStart = 0;
  let fruitFrequency = {};
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let nextFruit = arr[windowEnd];
    if (!(nextFruit in fruitFrequency)) {
      fruitFrequency[nextFruit] = 0;
    }
    fruitFrequency[nextFruit]++;
    // shrink the window
    while (Object.keys(fruitFrequency).length > k) {
      let leftFruit = arr[windowStart];
      fruitFrequency[leftFruit]--;
      if (fruitFrequency[leftFruit] == 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart++;
    }
    // Calculate the max length after shrinking the window
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

/**
 * permutation of string
 */

export function permutationString(s1, s2) {
  let characterFrequency = {};
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    let nextChar = s2[windowEnd];
    console.log(nextChar);
    if (!nextChar in characterFrequency) {
      characterFrequency[nextChar] = 0;
    }
    characterFrequency[nextChar]++;
  }
  console.log(characterFrequency);
}
