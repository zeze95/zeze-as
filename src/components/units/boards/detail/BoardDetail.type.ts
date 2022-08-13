export interface IBoardDetailUI {
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickBoardDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;

  data: any;
}
