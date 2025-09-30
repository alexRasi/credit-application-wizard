import styled from "styled-components";

export const StyledTextInput = styled.input<{ $invalid?: boolean }>`
  padding: 8px 12px;
  border: 2px solid
    ${({ $invalid }) =>
      $invalid
        ? "var(--color-input-border-error)"
        : "var(--color-input-border)"};
  border-radius: var(--radius-md);
  padding: 12px 16px;
  color: var(--color-text-primary);
  background: var(--color-white);

  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-base);

  /*on focus border color*/
  &:focus {
    border-color: var(--color-input-border-focus);
    outline: none; /*remove default focus outline */
  }
`;
