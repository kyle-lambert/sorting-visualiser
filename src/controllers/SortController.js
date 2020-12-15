export default class SortController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onNodeListChanged(this.model.nodes);
    this.view.bindNodeCountChanged(this.handleNodeCount.bind(this));
    this.view.bindAnimationSpeedChanged(this.handleAnimationSpeed.bind(this));
    this.view.bindGenerateNewNodes(this.handleGenerateNewNodes.bind(this));
    this.model.bindNodeCountChanged(this.onNodeListChanged.bind(this));
  }

  onNodeListChanged(nodes) {
    this.view.displayNodes(nodes);
  }

  handleGenerateNewNodes() {
    this.model.generateNodes();
  }

  handleNodeCount(num) {
    this.model.setNodeCount(num);
  }

  handleAnimationSpeed(num) {
    this.model.setAnimationSpeed(num);
  }
}
