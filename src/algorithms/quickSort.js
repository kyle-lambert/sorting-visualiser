// export default function quickSort(array) {
//   const frames = newFrame(array);

//   recursiveSort(array, 0, array.length - 1);

//   function recursiveSort(array, left, right) {
//     let index;

//     if (array.length > 1) {
//       index = partition(array, left, right);

//       if (left < index - 1) {
//         recursiveSort(array, left, index - 1);
//       }

//       if (index < right) {
//         recursiveSort(array, index, right);
//       }
//     }

//     addToFrame(frames, array, [...lastSortedIndices(frames), left, right], [], []);

//     return array;
//   }

//   function partition(array, left, right) {
//     let pivot = array[Math.floor((right + left) / 2)];
//     let pivotIndex = array.indexOf(pivot);

//     addToFrame(frames, array, lastSortedIndices(frames), [], [], pivotIndex);

//     while (left <= right) {
//       while (array[left] < pivot) {
//         addToFrame(frames, array, lastSortedIndices(frames), [left], [], pivotIndex);
//         left++;
//       }

//       while (array[right] > pivot) {
//         addToFrame(frames, array, lastSortedIndices(frames), [right], [], pivotIndex);
//         right--;
//       }

//       if (left <= right) {
//         swap(array, left, right);
//         addToFrame(frames, array, lastSortedIndices(frames), [], [left, right], pivotIndex);
//         left++;
//         right--;
//       }
//     }

//     return left;
//   }

//   return frames;
// }

// function swap(array, firstIndex, secondIndex) {
//   let tmp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = tmp;
// }

// function newFrame(array) {
//   return [
//     {
//       array: array.slice(0),
//       sortedIndices: [],
//       compare: [],
//       swap: [],
//       pivot: null,
//     },
//   ];
// }

// function addToFrame(frames, array, sortedIndices = [], compare = [], swap = [], pivot = null) {
//   frames.push({
//     array: [...array],
//     sortedIndices: [...sortedIndices],
//     compare: [...compare],
//     swap: [...swap],
//     pivot,
//   });
// }

// function lastSortedIndices(frames) {
//   return frames[frames.length - 1].sortedIndices;
// }
