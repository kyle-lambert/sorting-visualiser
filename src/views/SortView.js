export default class SortView {
  constructor() {
    this.elements = {
      nodeList: this.getElement('[data-js="nodeList"]'),
      nodeCountSelect: this.getElement('[data-js="nodeCountSelect"]'),
      animationSpeedSelect: this.getElement('[data-js="animationSpeedSelect"]'),
      algorithmSelect: this.getElement('[data-js="algorithmSelect"]'),
      startSortButton: this.getElement('[data-js="startSortButton"]'),
      generateNodesButton: this.getElement('[data-js="generateNodesButton"]'),
    };
    this.timeout = null;
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  createElement(tag) {
    return document.createElement(tag);
  }

  clearNodes() {
    while (this.elements.nodeList.firstChild) {
      this.elements.nodeList.removeChild(this.elements.nodeList.firstChild);
    }
  }

  renderNodes(nodes) {
    this.clearNodes();

    nodes.forEach((n) => {
      const node = this.createElement("div");
      node.classList.add("board__bar");
      node.style.height = n + "%";
      this.elements.nodeList.append(node);
    });
  }

  renderFrame(frame) {
    this.clearNodes();
    const { array, compare, pivot, swap, sortedIndices } = frame;

    array.forEach((a, i) => {
      const node = this.createElement("div");
      node.classList.add("board__bar");
      node.style.height = a + "%";

      if (compare[0] === i || compare[1] === i) {
        node.classList.add("board__bar--compare");
      }

      if (swap[0] === i || swap[1] === i) {
        node.classList.add("board__bar--swap");
      }

      if (pivot === i) {
        node.classList.add("board__bar--pivot");
      }

      if (sortedIndices.includes(i)) {
        node.classList.add("board__bar--sorted");
      }

      this.elements.nodeList.append(node);
    });
  }

  renderFrames(frames, speed) {
    frames.forEach((f, i) => {
      this.timeout = setTimeout(() => {
        this.renderFrame(f);
      }, speed * i);
    });
  }
}
