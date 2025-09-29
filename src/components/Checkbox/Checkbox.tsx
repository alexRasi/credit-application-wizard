import type { InputHTMLAttributes } from "react";
import {
  CheckboxWrapper,
  StyledCheckbox,
  CheckboxText,
} from "./Checkbox.styles";

type CheckboxProps = {
  label?: string;
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ label, id, ...props }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox id={id} {...props} />
      {label && <CheckboxText>{label}</CheckboxText>}
    </CheckboxWrapper>
  );
};
// TODO FIX align Styled naming
