import styled from "styled-components";

export const ProductSelectionWrapper = styled.div`
  align-items: center;
  padding: 25px;
`;

export const SelectProducts = styled.div`
  div {
  }
`;

export const ProductInfoBox = styled.div`
  input,
  button.next-btn {
    width: 100%;
    border: none;
    border-radius: 4px;
    height: 40px;
    padding: 0 40px;
  }
  input {
    background: #efefef;
  }
  button.next-btn {
    background: #4f46e5;
    color: #fff;
    margin-top: 40px;
  }
  h5 {
    font-size: 14px;
  }
`;

export const SelectProductsRow = styled.div``;

export const InfoButton = styled.button`
  font-size: 11px;
  padding: 0;
  height: 30px;
  margin-bottom: 15px;
  border: 0;
  width: 110px;
  border-radius: 4px;
  background-color: #4f46e5;
  color: #fff;
`;
