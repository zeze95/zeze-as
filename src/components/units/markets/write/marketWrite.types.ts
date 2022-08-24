import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IMarketWrite {
  boardData?: any;
  isEdit?: boolean;
}

export interface IMarketWirteUIProps {
  data?: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickWrite: any;
  onChangeContets: (value: string) => void;
  onClickUpdate: (data: any) => void;
  isOpen: boolean;
  isEdit: boolean;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickAddressSearch: () => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  fileUrls: string[];
  boardData: any;
  handleCancel: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  tagsArr: string[] | [];
  deleteTags: (index: number) => () => void;
  onKeyUp: (event: any) => void;
}
