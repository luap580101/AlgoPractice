function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}

module.exports = insertionSort;
