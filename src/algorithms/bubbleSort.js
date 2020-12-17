export default function bubbleSort(array) {
  const frames = newFrame(array);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      addToFrame(frames, array, lastSortedIndices(frames), [j, j + 1], [], []);
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        addToFrame(frames, array, lastSortedIndices(frames), [], [j, j + 1], []);
      }
    }
    addToFrame(frames, array, [...lastSortedIndices(frames), array.length - 1 - i], []);
  }
  return frames;
}

function newFrame(array) {
  return [
    {
      array: array.slice(0),
      sortedIndices: [],
      compare: [],
      swap: [],
      pivot: [],
    },
  ];
}

function addToFrame(frames, array, sortedIndices = [], compare = [], swap = [], pivot = []) {
  frames.push({
    array: [...array],
    sortedIndices: [...sortedIndices],
    compare: [...compare],
    swap: [...swap],
    pivot: [...pivot],
  });
}

function lastSortedIndices(frames) {
  return frames[frames.length - 1].sortedIndices;
}
