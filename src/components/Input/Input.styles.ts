import styled from "styled-components";

//TODO css vars

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledInput = styled.input<{ $invalid?: boolean }>`
  padding: 8px 12px;
  border: 2px solid ${({ $invalid }) => ($invalid ? "#DC2626" : "#78716c")};
  border-radius: 8px;
  padding: 12px 16px;

  font-weight: 400;
  font-size: 16px;
`;

export const ErrorText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #dc2626;
`;
