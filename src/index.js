import Board from "./models/Board";
import * as boardView from "./views/boardView";

const state = {};

document.addEventListener("DOMContentLoaded", () => {
  boardController();
});

function boardController() {
  const initialiseBoard = () => {
    state.board = new Board();
    state.board.generateBoard();
    boardView.renderBars(state.board.bars);
  };

  document.querySelector("[data-generate-button]").addEventListener("click", (e) => {
    e.preventDefault();
    state.board.generateBoard();
    boardView.renderBars(state.board.bars);
    console.log(state.board);
  });

  initialiseBoard();
}
