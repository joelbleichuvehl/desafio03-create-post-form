import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .input {
    align-items: center;
    display: flex;
  }

  span {
    color: red;
    font-size: 12px;
    margin-left: 25px;
    margin-top: 8px;
  }
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #ffffff;
  flex: 1;
  border: 0;
  height: 30px;
`;
