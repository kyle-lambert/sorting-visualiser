import Node from "./Node";
import { generateRandomNumber } from "../helpers";
import bubbleSort from "../algorithms/bubbleSort";
import quickSort from "../algorithms/quickSort";

export default class Sort {
  constructor() {
    this.nodes = [];
    this.nodeCount = 20;
    this.frames = [];
    this.animationSpeed = 400;
    this.algorithm = "quickSort";
    this.isAnimating = false;
    this.initialiseNodes();
  }

  initialiseNodes() {
    const nodes = [];
    for (let i = 0; i < this.nodeCount; i++) {
      nodes.push(generateRandomNumber(10, 100));
    }
    this.nodes = nodes;
  }

  sortNodes() {
    switch (this.algorithm) {
      case "bubbleSort": {
        this.frames = bubbleSort(this.nodes);
        break;
      }
      case "mergeSort": {
        break;
      }
      case "quickSort": {
        this.frames = quickSort(this.nodes);
        // console.log(this.frames);
        // console.log(this.frames);
        // console.log(quickSort(this.nodes));
        break;
      }
      case "heapSort": {
        break;
      }
      default: {
        console.log("Algorithm no found!");
      }
    }
  }

  generateNodes() {
    const nodes = [];
    for (let i = 0; i < this.nodeCount; i++) {
      nodes.push(generateRandomNumber(10, 100));
    }
    this.nodes = nodes;
  }

  setNodeCount(count) {
    this.nodeCount = Number.parseInt(count);
  }

  setAnimationSpeed(speed) {
    this.animationSpeed = Number.parseInt(speed);
  }

  setAlgorithm(algo) {
    this.algorithm = algo;
    console.log(this.algorithm);
  }
}
