import styled from "styled-components";

export const RadioWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
`;

export const StyledRadio = styled.input.attrs({ type: "radio" })`
  width: 14px;
  height: 14px;
  border: 1px solid #171717;
  border-radius: var(--radius-full);
  cursor: pointer;
  position: relative;
  margin: 0;
  box-sizing: border-box;
  appearance: none;
  -webkit-appearance: none; /* Safari/Chrome */
  -moz-appearance: none; /* Firefox */
  outline: none; /* remove UA focus ring */
  -webkit-tap-highlight-color: transparent;

  &:checked {
    border-color: var(--color-primary);
  }

  &:checked::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: var(--radius-full);
    background: var(--color-primary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Optional: your own accessible focus style */
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-primary-focus-ring);
  }
`;
export const RadioText = styled.span`
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
`;
