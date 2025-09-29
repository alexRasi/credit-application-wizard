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
  border-radius: var(--radius-sm);
  cursor: pointer;
  position: relative;
  margin: 0;

  &:checked {
    border-color: var(--color-primary);
  }

  &:checked::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: var(--radius-xs);
    background: var(--color-primary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  appearance: none;
  -webkit-appearance: none; /* Safari/Chrome */
  -moz-appearance: none; /* Firefox */
`;

export const CheckboxLabel = styled.label`
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
`;
