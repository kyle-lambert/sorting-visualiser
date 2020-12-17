export default function bubbleSort(nodes) {
  const trace = newTrace(nodes);

  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes.length - i - 1; j++) {
      addToTrace(trace, nodes, lastSorted(trace), [j, j + 1], []);
      if (nodes[j] > nodes[j + 1]) {
        let tmp = nodes[j];
        nodes[j] = nodes[j + 1];
        nodes[j + 1] = tmp;
        addToTrace(trace, nodes, lastSorted(trace), [], [j, j + 1]);
      }
    }
    addToTrace(trace, nodes, [...lastSorted(trace), nodes.length - 1 - i]);
  }
  console.log(trace);
  return trace;
}

function newTrace(nodes) {
  return [
    {
      array: nodes.slice(0),
      sortedIndices: [],
      compare: [],
      swap: [],
    },
  ];
}

function addToTrace(trace, array, sortedIndices = [], compare = [], swap = []) {
  trace.push({
    array: [...array],
    sortedIndices: [...sortedIndices],
    compare: [...compare],
    swap: [...swap],
  });
}

function lastSorted(trace) {
  return trace[trace.length - 1].sortedIndices;
}
