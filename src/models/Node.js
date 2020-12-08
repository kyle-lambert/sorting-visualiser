export default class Node {
  constructor(value) {
    this.value = value;
    this.sorted = false;
  }

  log() {
    console.log(this.value);
  }
}
