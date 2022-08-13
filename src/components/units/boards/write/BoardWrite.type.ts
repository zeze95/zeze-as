import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  boardData?: {
    fetchBoard: {
      writer: string;
      title: string;
      contents: string;
    };
  };
  data: any;
  //   updateBoardInput: any;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IBoardWriteUI {
  isActive: any;
  isEdit: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  handleCancel: () => void;
  data?: any;
  isOpen: boolean;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  fileUrls: string[];
  boardData: any;
}
export interface ISubmitButtonProps {
  isActive: any;
}
