const bubbleSort = require("./bubbleSort");

test("Bubble Sort 正確排序數字陣列", () => {
  expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  expect(bubbleSort([10, -1, 2, 5, 0, 6, 4, -5])).toEqual([
    -5, -1, 0, 2, 4, 5, 6, 10,
  ]);
  expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});
