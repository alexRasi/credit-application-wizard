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

export const ErrorText = styled.div`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  color: var(--color-error);
`;
