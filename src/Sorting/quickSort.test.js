const quickSort = require("./quickSort");

test("Quick Sort 正確排序數字陣列", () => {
  expect(quickSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
  expect(quickSort([10, -1, 2, 5, 0, 6, 4, -5])).toEqual([
    -5, -1, 0, 2, 4, 5, 6, 10,
  ]);
  expect(quickSort([5, 1, 4, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  expect(quickSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
});
