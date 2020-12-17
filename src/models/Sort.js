import Node from "./Node";
import { generateRandomNumber } from "../helpers";
import bubbleSort from "../algorithms/bubbleSort";

export default class Sort {
  constructor() {
    this.nodes = [];
    this.nodeCount = 20;
    this.animationFrames = [];
    this.animationSpeed = 400;
    this.algorithm = "bubbleSort";
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
        this.animationFrames = bubbleSort(this.nodes);
        // console.log(this.animationFrames);
        break;
      }
      case "mergeSort": {
        break;
      }
      case "quickSort": {
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
