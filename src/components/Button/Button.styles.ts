import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  background-color: green;
  padding: 16px 32px;
  background-color: #009327;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
  width: 100%;

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

  font-weight: 600;
  font-size: 20px;
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
  }

  -webkit-tap-highlight-color: transparent;
`;
