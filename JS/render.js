import Board from "./board.js";
import MovementManager from "./movementManager.js";
const board1 = new Board(1, 6);
console.log(board1);
board1.setPiece(27, 1, 5);
board1.setPiece(34, 1, 2);
const a = 0;
console.log(MovementManager.getPossibleMoves(board1, 27));
//# sourceMappingURL=render.js.map