import type { InputHTMLAttributes } from "react";
import {
  CheckboxWrapper,
  StyledCheckbox,
  CheckboxText,
  CheckboxLabelWrapper,
} from "./Checkbox.styles";
import { ErrorText } from "../InputStyles";

type CheckboxProps = {
  label?: string;
  id?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ label, id, error, ...props }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <CheckboxLabelWrapper>
        <StyledCheckbox
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? error : undefined}
          {...props}
          role="checkbox"
        />
        {label && <CheckboxText>{label}</CheckboxText>}
      </CheckboxLabelWrapper>

      {error && <ErrorText role="alert">{error}</ErrorText>}
    </CheckboxWrapper>
  );
};
