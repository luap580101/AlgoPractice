const insertionSort = require("./insertionSort");

test("Insertion Sort 正確排序數字陣列", () => {
  expect(insertionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  expect(insertionSort([10, -1, 2, 5, 0, 6, 4, -5])).toEqual([
    -5, -1, 0, 2, 4, 5, 6, 10,
  ]);
  expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(insertionSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
});
