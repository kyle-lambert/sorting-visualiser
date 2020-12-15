import Sort from "./models/Sort";
import SortController from "./controllers/SortController";
import SortView from "./views/SortView";

const app = new SortController(new Sort(), new SortView());

console.log(app);

// import Board from "./models/Board";
// import * as boardView from "./views/boardView";

// const state = {};

// document.addEventListener("DOMContentLoaded", () => {
//   boardController();
// });

// function boardController() {
//   const initialiseBoard = () => {
//     state.board = new Board();
//     state.board.generateBoard();
//     boardView.renderBars(state.board.bars);
//   };

//   document.querySelector("[data-generate-button]").addEventListener("click", (e) => {
//     e.preventDefault();
//     state.board.generateBoard();
//     boardView.renderBars(state.board.bars);
//     console.log(state.board);
//   });

//   document.querySelector("[data-bar-count]").addEventListener("change", (e) => {
//     const barCount = Number.parseFloat(e.target.value);
//     state.board.setBarCount(barCount);
//     state.board.generateBoard();
//     boardView.renderBars(state.board.bars);
//   });

//   initialiseBoard();
// }
