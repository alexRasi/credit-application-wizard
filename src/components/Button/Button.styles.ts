import styled from "styled-components";

export const ButtonWrapper = styled.span`
  width: 100%;
`;

export const StyledButton = styled.button`
  all: unset;
  padding: 16px 32px;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.99);
    filter: brightness(0.95);
  }

  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  line-height: 100%;
  letter-spacing: 0%;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    pointer-events: none;
  }

  -webkit-tap-highlight-color: transparent;
`;
