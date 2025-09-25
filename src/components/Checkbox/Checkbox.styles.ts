import styled from "styled-components";

export const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 14px;
  height: 14px;
  border: 1px solid #171717;
  border-radius: 4px;
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
    border-radius: 2px;
    background: #009327;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  appearance: none;
  -webkit-appearance: none; /* Safari/Chrome */
  -moz-appearance: none; /* Firefox */
`;

export const CheckboxLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
