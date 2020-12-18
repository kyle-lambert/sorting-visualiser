export function newFrame(array) {
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

export function addToFrame(
  frames,
  array,
  sortedIndices = [],
  compare = [],
  swap = [],
  pivot = null
) {
  frames.push({
    array: [...array],
    sortedIndices: [...sortedIndices],
    compare: [...compare],
    swap: [...swap],
    pivot,
  });
}

export function lastSortedIndices(frames) {
  return frames[frames.length - 1].sortedIndices;
}
