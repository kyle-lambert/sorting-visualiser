import Node from "./Node";
import { generateRandomNumber } from "../helpers";

export default class Board {
  constructor() {
    this.bars = [];
    this.size = 30;
    this.speed = 10;
    this.algorithm = "bubble-sort";
  }

  generateBoard() {
    const bars = [];
    for (let i = 0; i < this.size; i++) {
      bars.push(new Node(generateRandomNumber(10, 100)));
    }
    this.bars = bars;
  }

  setAlgorithm(algo) {
    this.algorithm = algo;
  }

  setSpeed(num) {
    this.speed = num;
  }

  setSize(num) {
    this.size = num;
  }
}
