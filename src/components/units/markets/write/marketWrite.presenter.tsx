import * as S from "./marketWrite.styles";
import Input02 from "../../../commons/inputs/02";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Button01 from "../../../../commons/buttons/01";
import "react-quill/dist/quill.snow.css";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import Uploads from "../../../commons/uploads/02/Uploads01.container";
import { IMarketWirteUIProps } from "./marketWrite.types";
import KakakomapPage from "../../../../commons/libraries/kakao.map";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWirteUI(props: IMarketWirteUIProps) {
  return (
    <>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onCompleteAddressSearch}
          onCancel={props.handleCancel}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
        <S.WriterWrapper>
          <form
            onSubmit={props.handleSubmit(
              props.isEdit ? props.onClickUpdate : props.onClickWrite
            )}
          >
            <S.InputWrapper>
              상품명
              <Input02
                type="text"
                register={props.register("name")}
                placeholder="이름을 적어주세요."
                defaultValue={props.boardData?.fetchUseditem.name}
              />
              한줄요약
              <Input02
                type="text"
                register={props.register("remarks")}
                placeholder="짧은 설명을 적어주세요."
                defaultValue={props.boardData?.fetchUseditem.remarks}
              />
              상품설명
              <ReactQuill
                onChange={props.onChangeContets}
                defaultValue={props.boardData?.fetchUseditem.contents}
              />
              판매가격
              <Input02
                type="text"
                register={props.register("price")}
                defaultValue={props.boardData?.fetchUseditem.price}
              />
              태그입력
              <Input02
                type="text"
                register={props.register("tags")}
                defaultValue={props.boardData?.fetchUseditem.tags}
              ></Input02>
              <S.InputWrapper>
                <S.Label>주소</S.Label>
                <S.ZipcodeWrapper>
                  <KakakomapPage address={props.address}></KakakomapPage>
                  <S.Zipcode
                    placeholder="07250"
                    readOnly
                    value={
                      props.zipcode ||
                      props.data?.boardData.boardAddress?.zipcode
                    }
                  />

                  <S.SearchButton onClick={props.onClickAddressSearch}>
                    우편 번호 검색
                  </S.SearchButton>
                </S.ZipcodeWrapper>
                <S.Address
                  readOnly
                  value={
                    props.address || props.data?.boardData.boardAddress?.address
                  }
                />
                <S.Address
                  onChange={props.onChangeAddressDetail}
                  defaultValue={
                    props.data?.boardData.boardAddress?.addressDetail
                  }
                  value={
                    props.addressDetail ||
                    props.data?.boardData.boardAddress?.addressDetail
                  }
                />
              </S.InputWrapper>
              <S.ImageWrapper>
                <S.Label>사진첨부</S.Label>
                {props.fileUrls.map((el, index) => (
                  <Uploads
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
              </S.ImageWrapper>
              <Button01 title={props.isEdit ? "수정하기" : "등록하기"} />
            </S.InputWrapper>
          </form>
        </S.WriterWrapper>
      </S.Wrapper>
    </>
  );
}
