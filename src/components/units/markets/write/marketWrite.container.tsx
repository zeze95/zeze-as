import MarketWirteUI from "./marketWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./marketWrite.quries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";

const schema = yup.object({
  name: yup.string(),
  remarks: yup.string(),
  contents: yup.string(),
  price: yup.number(),
  tags: yup.string(),
});

// 상세 조건은 나중에

export default function MarketWrite(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema), // 조건들을 넣은것
    mode: "onChange", // 검증할 시간,상황
  });
  // 토큰 인증 받아야함
  useEffect(() => {
    localStorage.getItem("accessToken");
  }, []);

  // const onCompleteAddressSearch = (data: any) => {
  //   setIsOpen(false);
  //   // data.zonecode = { ...register("zipcode") };
  //   // data.address = { ...register("address") };
  //   // (data.addressDetail = { ...register("addressDetail") });
  //   setZipcode(zipcode);
  //   setAddressDetail(addressDetail);
  //   console.log(data.address);
  // };

  const onClickWrite = async (data) => {
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      Modal.success({ content: "등록 완료" });
      router.push("/boards");
      console.log(data);
    } catch (error) {
      Modal.error({ content: error.message });
      console.log(error);
    }
  };
  const onChangeContets = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value);

    // onChange 됐다고 react-hook-from에 알려주는 기능
    trigger("contets");
  };

  const onClickUpdate = async (data) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.boardData.updateUseditem?.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateUseditemInput: any = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    if (data.zipcode || data.address || data.addressDetail) {
      updateUseditemInput.boardAddress = {};
      if (data.zipcode) updateUseditemInput.boardAddress.zipcode = data.zipcode;
      if (data.address) updateUseditemInput.boardAddress.address = data.address;
      if (data.addressDetail)
        updateUseditemInput.boardAddress.addressDetail = data.addressDetail;
    }
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: fileUrls,
            useditemAddress: {
              // zipcode,
              // address,
              // addressDetail,
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
          useditemId: router.query._id,
        },
      });
      Modal.success({ content: "게시글이 수정되었습니다." });
      router.push(`/markets/${router.query._id}`);
    } catch (error) {
      console.log(error.message);
      Modal.error({ content: error.message });
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
    console.log();
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  return (
    <>
      <MarketWirteUI
        register={register}
        formState={formState}
        handleSubmit={handleSubmit}
        onClickWrite={onClickWrite}
        onChangeContets={onChangeContets}
        onClickUpdate={onClickUpdate}
        isOpen={isOpen}
        isEdit={props.isEdit}
        onCompleteAddressSearch={onCompleteAddressSearch}
        onClickAddressSearch={onClickAddressSearch}
        onChangeFileUrls={onChangeFileUrls}
        fileUrls={fileUrls}
        handleCancel={handleCancel}
        boardData={props.boardData}
        address={address}
        zipcode={zipcode}
        onChangeAddressDetail={onChangeAddressDetail}
      ></MarketWirteUI>
    </>
  );
}
