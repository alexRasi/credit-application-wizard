import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
`;

export const StyledInput = styled.input<{ $invalid?: boolean }>`
  padding: 8px 12px;
  border: 2px solid ${({ $invalid }) => ($invalid ? "#DC2626" : "#78716c")};
  border-radius: var(--radius-md);
  padding: 12px 16px;

  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-base);
`;

export const ErrorText = styled.div`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  color: var(--color-error);
`;
