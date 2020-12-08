const boardList = document.querySelector("[data-board]");

export const clearBars = () => {
  boardList.innerHTML = "";
};

export const renderBars = (list) => {
  clearBars();

  list.forEach((node) => {
    const bar = document.createElement("div");
    bar.classList.add("board__bar");
    bar.style.height = `${node.value}%`;

    boardList.appendChild(bar);
  });
};
