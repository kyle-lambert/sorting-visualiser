import { newFrame, addToFrame, lastSortedIndices } from "./helpers";

export default function mergeSort(array) {
  const frames = newFrame(array);

  mergeSortRecursive(array);

  function mergeSortRecursive(array) {
    if (array.length <= 1) {
      return array;
    }

    const mid = Math.floor(array.length / 2);
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);

    return merge(mergeSortRecursive(leftArr), mergeSortRecursive(rightArr));
  }

  function merge(leftArr, rightArr) {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length) {}

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      const leftEl = leftArr[leftIndex];
      const rightEl = rightArr[rightIndex];

      if (leftEl < rightEl) {
        output.push(leftEl);
        leftIndex++;
      } else {
        output.push(rightEl);
        rightIndex++;
      }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
  }
  return frames;
}
