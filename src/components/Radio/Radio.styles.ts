import styled from "styled-components";

export const RadioWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

export const StyledRadio = styled.input.attrs({ type: "radio" })`
  width: 14px;
  height: 14px;
  border: 1px solid #171717;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin: 0;

  &:checked {
    border-color: #009327;
  }

  &:checked::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #009327;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const RadioLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
