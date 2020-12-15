export default class SortView {
  constructor() {
    this.nodeList = this.getElement('[data-js="nodeList"]');
    this.nodeCountSelect = this.getElement('[data-js="nodeCountSelect"]');
    this.animationSpeedSelect = this.getElement('[data-js="animationSpeedSelect"]');
    this.algorithmSelect = this.getElement('[data-js="algorithmSelect"]');
    this.startSortButton = this.getElement('[data-js="startSortButton"]');
    this.newNodesButton = this.getElement('[data-js="newNodesButton"]');
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  createElement(tag) {
    return document.createElement(tag);
  }

  clearNodes() {
    this.nodeList.innerHTML = "";
  }

  displayNodes(nodes) {
    while (this.nodeList.firstChild) {
      this.nodeList.removeChild(this.nodeList.firstChild);
    }

    if (nodes.length > 0) {
      nodes.forEach((n) => {
        const node = this.createElement("div");
        node.classList.add("board__bar");
        node.style.height = n.value + "%";
        this.nodeList.append(node);
      });
    }
  }

  bindGenerateNewNodes(handler) {
    this.newNodesButton.addEventListener("click", (e) => {
      handler();
    });
  }

  bindNodeCountChanged(handler) {
    this.nodeCountSelect.addEventListener("change", (e) => {
      handler(e.target.value);
    });
  }

  bindAnimationSpeedChanged(handler) {
    this.animationSpeedSelect.addEventListener("change", (e) => {
      handler(e.target.value);
    });
  }
}
