import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;
}

export interface IBoardCommentWriteUIProps {
  onChangeWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite?: (data: any) => void;
  onClickUpdate?: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onChangeStar: (star: number) => void;
  star: number;
  setIsEdit?: any;
  isEdit?: boolean;
  el?: any;
  contents?: string;
  desc: any;
  setStar?: Dispatch<SetStateAction<number>>;
  onClickUpdateCancle: () => void;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
