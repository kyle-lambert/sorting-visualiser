import Node from "./Node";
import { generateRandomNumber } from "../helpers";

export default class Sort {
  constructor() {
    this.nodes = [];
    this.nodeCount = 20;
    this.frames = [];
    this.animationSpeed = 10;
    this.isAnimating = false;
    this.onNodeListChanged = null;
    this.initialiseNodes();
  }

  initialiseNodes() {
    const nodes = [];
    for (let i = 0; i < this.nodeCount; i++) {
      nodes.push(new Node(generateRandomNumber(10, 100)));
    }
    this.nodes = nodes;
  }

  generateNodes() {
    const nodes = [];
    for (let i = 0; i < this.nodeCount; i++) {
      nodes.push(new Node(generateRandomNumber(10, 100)));
    }
    this.nodes = nodes;
    this.onNodeListChanged(this.nodes);
  }

  setNodeCount(count) {
    this.nodeCount = Number.parseInt(count);
    this.generateNodes();
    this.onNodeListChanged(this.nodes);
  }

  setAnimationSpeed(speed) {
    this.animationSpeed = Number.parseInt(speed);
  }

  bindNodeCountChanged(callback) {
    this.onNodeListChanged = callback;
  }
}
