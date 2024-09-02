function partition(arr, low, high) {
    // Take the last element as pivot
    let pivot = arr[high];
    let i = low - 1;

    // Loop through the array
    for (let j = low; j < high; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            // Swap elements
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Swap pivot to its correct position
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    // Return the partition index
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        // Partition the array and get the partition index
        let partitionIndex = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
  
}



export default quickSort;
