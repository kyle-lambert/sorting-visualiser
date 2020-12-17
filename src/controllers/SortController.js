export default class SortController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.bindGenerateNodesEvent();
    this.bindNodeCountEvent();
    this.bindAnimationSpeedEvent();
    this.bindStartSortEvent();
    this.bindAlgorithmEvent();
  }

  init() {
    this.view.renderNodes(this.model.nodes);
  }

  runAnimation() {
    this.view.renderFrames(this.model.frames, this.model.animationSpeed);
  }

  bindGenerateNodesEvent() {
    this.view.elements.generateNodesButton.addEventListener("click", () => {
      if (!this.model.isAnimating) {
        this.model.generateNodes();
        this.view.renderNodes(this.model.nodes);
      }
    });
  }

  bindNodeCountEvent() {
    this.view.elements.nodeCountSelect.addEventListener("change", (e) => {
      this.model.setNodeCount(e.target.value);
      this.model.generateNodes();
      this.view.renderNodes(this.model.nodes);
    });
  }

  bindAnimationSpeedEvent() {
    this.view.elements.animationSpeedSelect.addEventListener("change", (e) => {
      this.model.setAnimationSpeed(e.target.value);
    });
  }

  bindStartSortEvent() {
    this.view.elements.startSortButton.addEventListener("click", () => {
      if (!this.model.isAnimating) {
        this.model.sortNodes();
        this.runAnimation();
      }
    });
  }

  bindAlgorithmEvent() {
    this.view.elements.algorithmSelect.addEventListener("change", (e) => {
      if (!this.model.isAnimating) {
        this.model.setAlgorithm(e.target.value);
      }
    });
  }
}
