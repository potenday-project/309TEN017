function saveBoardId(boardId: number) {
  localStorage.setItem('board_id', boardId.toString());
}

function getBoardId() {
  return localStorage.getItem('board_id');
}

export default {
  saveBoardId,
  getBoardId,
};
