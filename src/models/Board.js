import Node from "./Node";
import { generateRandomNumber } from "../helpers";

export default class Board {
  constructor() {
    this.bars = [];
    this.barCount = 20;
    this.speed = 10;
    this.algorithm = "bubble-sort";
  }

  generateBoard() {
    const bars = [];
    for (let i = 0; i < this.barCount; i++) {
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

  setBarCount(num) {
    this.barCount = num;
  }
}
